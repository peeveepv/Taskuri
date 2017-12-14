import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Button, View, ScrollView, Alert} from 'react-native';
import {haePerheenLunastetut, lisaaPalkinto, haeKaikkiPerheenPalkinnot} from "../tiedonhakusivut/Palkintohaku";
import LaatikonSisalto from '../containers/LaatikonSisalto';
import Laatikko from '../containers/Laatikko';
import { Actions } from 'react-native-router-flux';


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
        haePerheenLunastetut(7).then((json) => {
            console.log(json);
            this.setState({ryhmanlunastamatpalkinnot: json});
        });
        haeKaikkiPerheenPalkinnot(7).then((json) => {
            console.log(json);
            this.setState({ryhmankaikkipalkinnot: json});
        });
    };

    lisaa() {
        lisaaPalkinto(this.state.nimi, this.state.kuvaus, this.state.arvo, this.state.ryhmaID);
        Alert.alert('Palkinto lisätty');
        Actions.oletus();
    };


    siirryPalkintoon(indeksi) {
        console.log('You clicked: ' + indeksi);
        Actions.palkintolisays()
    }


    render() {
        return (
            <ScrollView style={{
                flex: 1,
                flexDirection: 'column',
            }}>

                <View style={styles.omat}>

                    <Laatikko laatikonNimi="Kaikki ryhmän palkinnot">
                        <Text>Palkinnon nimeä klikkaamalla muokkaukseen</Text>
                        <Text> </Text>
                        <ScrollView style={styles.container}>
                            {this.state.ryhmankaikkipalkinnot.map((item, index) => {
                                return (
                                    <View key={item.id}>
                                        <Button
                                            color="#0ff5b4"
                                            title={item.nimi}
                                            onPress={(title)=>{this.siirryPalkintoon(item.id)}}
                                        />
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </Laatikko>



                    <Laatikko laatikonNimi="Kaikki ryhmän lunastetut palkinnot">

                        {this.state.ryhmanlunastamatpalkinnot.map((ryhmanlunastamapalkinto) =>
                            <LaatikonSisalto key={ryhmanlunastamapalkinto.id} otsikko={ryhmanlunastamapalkinto.nimi} lisatieto={ryhmanlunastamapalkinto.arvo} />)}

                    </Laatikko>


                    <Laatikko laatikonNimi="Lisää uusi palkinto">

                        <Text>Syötä palkinnon nimi</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder="Syötä nimi"
                                   onChangeText={(nimi) => this.setState({nimi})}
                                   value={this.state.nimi}/>
                        <Text>Syötä palkinnon kuvaus</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder="Syötä kuvaus"
                                   onChangeText={(kuvaus) => this.setState({kuvaus})}
                                   value={this.state.kuvaus}/>
                        <Text>Syötä palkinnon arvo pisteinä</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder="Syötä pisteet"
                                   onChangeText={(arvo) => this.setState({arvo})}
                                   value={`${this.state.arvo}`} keyboardType='numeric'/>
                        <Text>Syötä ID ryhmälle, johon palkinto lisätään</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder="Syötä ryhmäID"
                                   onChangeText={(ryhmaID) => this.setState({ryhmaID})}
                                   value={`${this.state.ryhmaID}`} keyboardType='numeric'/>
                        <Button color="#0ff5b4" title='Lisää palkinto' onPress={() => this.lisaa()} />
                    </Laatikko>

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    laatikot: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 10,
    },
    omat: {
        flex: 1,
        justifyContent: 'center',
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
    },
    buttoncontainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
