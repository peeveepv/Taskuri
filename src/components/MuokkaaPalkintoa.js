import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Button, View, ScrollView, Alert, Picker, TouchableOpacity} from 'react-native';
import {muokkaaPalkintoa, } from "../tiedonhakusivut/Tehtavahaku";
import LaatikonSisalto from '../containers/LaatikonSisalto';
import Laatikko from '../containers/Laatikko';
import { Actions } from 'react-native-router-flux';
import TehtavaHallinnointi from '../AdminSivut/TehtavaHallinnointi';
import {haeKaikkiRyhmanKayttajat, muokkaaKayttajaa, poistaKayttaja, haeKayttajaIdlla} from '../tiedonhakusivut/Palkintohaku'

export default class MuokkaaPalkintoa extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nimi: '',
            kuvaus: '',
            arvo: 0,
            ryhmaid: 0,
            kaikkiryhmankayttajat: [],

        };
    }

    componentDidMount() {
        let id = this.state.id;
        console.log(id);
        haeTiettyPalkinto(id).then((json) => {
            this.setState({id: json.id, ryhmaid: json.ryhmaid, luoja: json.luoja, lammas: json.lammas, nimi: json.nimi, kuvaus: json.nimi, pisteet: json.pisteet});
        });
        haeKaikkiRyhmanKayttajat(7).then((json) => {
            this.setState({kaikkiryhmankayttajat: json});
        });
    };

    muokkaa() {
        muokkaaTehtavaa(this.state.id, this.state.ryhmaid, this.state.luoja, this.state.lammas, this.state.nimi, this.state.kuvaus, this.state.pisteet, this.state.tila);
        console.log("Tietoja tehtävästä " + this.state.id + "ryhmanid" + this.state.ryhmaid + "luoja ja lammas" + this.state.luoja + this.state.lammas + this.state.nimi);
        console.log("Kuvaus, pisteet ja tila" + this.state.kuvaus + this.state.pisteet + this.state.tila);
        Alert.alert('Palkintoa muokattu onnistuneesti');
        Actions.palkinnot();
    };


    render() {
        return (
            <ScrollView style={{
                flex: 1,
                flexDirection: 'column',
            }}>

                <Laatikko style={styles.omat} laatikonNimi="">
                    <Laatikko style={styles.omat} laatikonNimi="Muokkaa palkintoa alla:">
                        {/*<TextInput style={{height: 0, width:0, borderColor: 'gray', borderWidth: 1}}*/}
                        {/*placeholder={this.state.id}*/}
                        {/*onChangeText={(id) => this.setState({id})}*/}
                        {/*value={`${this.state.id}`} keyboardType='numeric'/>*/}
                        {/*<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}*/}
                        {/*placeholder={this.state.ryhmaId}*/}
                        {/*onChangeText={(ryhmaId) => this.setState({ryhmaId})}*/}
                        {/*value={`${this.state.ryhmaId}`} keyboardType='numeric'/>*/}
                        {/*<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}*/}
                        {/*placeholder={this.state.luoja}*/}
                        {/*onChangeText={(luoja) => this.setState({luoja})}*/}
                        {/*value={`${this.state.luoja}`} keyboardType='numeric'/>*/}


                        <Text>Palkinnon otsikko</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder={this.state.nimi}
                                   onChangeText={(nimi) => this.setState({nimi})}
                                   value={this.state.nimi}/>
                        <Text>Palkinnon kuvaus</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder={this.state.kuvaus}
                                   onChangeText={(kuvaus) => this.setState({kuvaus})}
                                   value={this.state.kuvaus}/>
                        <Text>Palkinnon arvo pisteissä</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder={`${this.state.pisteet}`}
                                   onChangeText={(pisteet) => this.setState({pisteet})}
                                   value={`${this.state.pisteet}`} keyboardType='numeric'/>
                        {/*<Text>Suoritetustila (suoritettu=true, suorittamatta=false)</Text>*/}
                        {/*<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}*/}
                        {/*placeholder={this.state.tila}*/}
                        {/*onChangeText={(tila) => this.setState({tila})}*/}
                        {/*value={this.state.tila}/>*/}


                        <View style={styles.buttoncontainer}>
                            <Button color="#0ff5b4" title='Muokkaa' onPress={() => this.muokkaa()} />
                        </View>

                    </Laatikko>
                </Laatikko>
            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    omat: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 30,

    },

    buttoncontainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    otsikko: {
        flex: 1,
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: 'steelblue',
    },
    laatikot: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 10,
    }

});