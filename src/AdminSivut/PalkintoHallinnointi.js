import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Button, View, ScrollView, Alert} from 'react-native';
import {haePerheenLunastetut, lisaaPalkinto, haeKaikkiPerheenPalkinnot} from "../tiedonhakusivut/Palkintohaku";
import LaatikonSisalto from '../containers/LaatikonSisalto';
import Laatikko from '../containers/Laatikko';


export default class PalkintoHallinnointi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nimi: '',
            kuvaus: '',
            arvo: '',
            ryhmaID: '',
            ryhmankaikkipalkinnot: [],
            ryhmanlunastamatpalkinnot: [],
        };
    }

    //haetaan käyttäjät(metodilla haeKaikkiRyhmanKayttajat), jotka mapataan render-metodissa
    componentDidMount() {
        haePerheenLunastetut(12).then((json) => {
            console.log(json);
            this.setState({ryhmanlunastamatpalkinnot: json});
        });
        haeKaikkiPerheenPalkinnot(12).then((json) => {
            console.log(json);
            this.setState({ryhmankaikkipalkinnot: json});
        });
    };

    lisaa() {
        lisaaPalkinto(this.state.nimi, this.state.kuvaus, this.state.arvo, this.state.ryhmaID);
        Alert.alert('Palkinto lisätty');
    };


    poista() {
        poistaKayttaja();
    };

    toggle(){

    }

    render() {
        return (
            <ScrollView style={{
                flex: 1,
                flexDirection: 'column',
            }}>

                <View style={styles.omat}>

                    <Laatikko laatikonNimi="Kaikki ryhmän palkinnot">

                        {this.state.ryhmankaikkipalkinnot.map((ryhmanpalkinto) =>
                            <LaatikonSisalto key={ryhmanpalkinto.id} otsikko={ryhmanpalkinto.nimi} lisatieto={ryhmanpalkinto.arvo} />)}

                    </Laatikko>

                    <Laatikko laatikonNimi="Kaikki ryhmän lunastetut palkinnot">

                        {this.state.ryhmanlunastamatpalkinnot.map((ryhmanlunastamapalkinto) =>
                            <LaatikonSisalto key={ryhmanlunastamapalkinto.id} otsikko={ryhmanlunastamapalkinto.nimi} lisatieto={ryhmanlunastamapalkinto.arvo} />)}

                    </Laatikko>


                    <Laatikko laatikonNimi="Lisää uusi palkinto">

                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                   placeholder="Syötä nimi"
                                   onChangeText={(nimi) => this.setState({nimi})}
                                   value={this.state.nimi}/>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                   placeholder="Syötä kuvaus"
                                   onChangeText={(kuvaus) => this.setState({kuvaus})}
                                   value={this.state.kuvaus}/>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                   placeholder="Syötä pisteet"
                                   onChangeText={(arvo) => this.setState({arvo})}
                                   value={`${this.state.arvo}`} keyboardType='numeric'/>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                   placeholder="Syötä ryhmäID"
                                   onChangeText={(ryhmaID) => this.setState({ryhmaID})}
                                   value={`${this.state.ryhmaID}`} keyboardType='numeric'/>
                        <Button title='Lisää palkinto' onPress={() => this.lisaa()} />
                    </Laatikko>

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    omat: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'yellow',
        margin: 20,
    },
    yhteiset: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
        margin: 20,
    },
    otsikko: {
        flex: 1,
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: 'steelblue',
    }
});
