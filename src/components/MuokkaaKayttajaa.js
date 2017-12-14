import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Button, View, ScrollView, Alert, Picker, TouchableOpacity} from 'react-native';
import {muokkaaTehtavaa, poistaTehtava, haeTiettyTehtava} from "../tiedonhakusivut/Tehtavahaku";
import {haeKaikkiRyhmanKayttajat, muokkaaKayttajaa, poistaKayttaja, haeKayttajaIdlla} from '../tiedonhakusivut/Kayttajahaku'
import LaatikonSisalto from '../containers/LaatikonSisalto';
import Laatikko from '../containers/Laatikko';
import { Actions } from 'react-native-router-flux';
import TehtavaHallinnointi from '../AdminSivut/TehtavaHallinnointi';


export default class MuokkaaKayttajaa extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            nimi: '',
            salasana: '',
            admin: false,
            pisteet: 0,
            ryhmaid: 0,
            email: '',
            kaikkiryhmankayttajat: [],

        };
    }

    //haetaan käyttäjät(metodilla haeKaikkiRyhmanKayttajat), jotka mapataan render-metodissa
    componentDidMount() {
        let id = this.state.id;
        console.log(id);
        haeKayttajaIdlla(id).then((json) => {
            this.setState({id: json.id, nimi: json.nimi, salasana: json.salasana, admin: json.admin, pisteet: json.pisteet, ryhmaid: json.ryhmaid, email: json.email});
        });
    };

    muokkaa() {
        muokkaaKayttajaa(this.state.id, this.state.nimi, this.state.salasana, this.state.admin, this.state.pisteet, this.state.ryhmaid, this.state.email);
        Alert.alert('Käyttäjää muokattu onnistuneesti');
        Actions.kayttajat();
    };


    poista() {
        poistaKayttaja(this.state.id);
        Alert.alert('Käyttäjä poistettu onnistuneesti');
        Actions.tehtavat();
    };


    render() {
        return (
            <ScrollView style={{
                flex: 1,
                flexDirection: 'column',
            }}>

                <Laatikko style={styles.omat} laatikonNimi="">
                    <Laatikko style={styles.omat} laatikonNimi="Muokkaa käyttäjää alla:">

                        <Text>Käyttäjän nimi</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder={this.state.nimi}
                                   onChangeText={(nimi) => this.setState({nimi})}
                                   value={this.state.nimi}/>
                        <Text>Käyttäjän salasana</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder={this.state.salasana}
                                   onChangeText={(salasana) => this.setState({salasana})}
                                   value={this.state.salasana}/>
                        <Text>Käyttäjän pisteet</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder={`${this.state.pisteet}`}
                                   onChangeText={(pisteet) => this.setState({pisteet})}
                                   value={`${this.state.pisteet}`} keyboardType='numeric'/>
                        <Text>Käyttäjän sähköpostiosoite</Text>
                        <TextInput style={styles.laatikot}
                                   placeholder={this.state.email}
                                   onChangeText={(email) => this.setState({email})}
                                   value={this.state.email}/>
                        {/*<Text>Suoritetustila (suoritettu=true, suorittamatta=false)</Text>*/}
                        {/*<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}*/}
                        {/*placeholder={this.state.tila}*/}
                        {/*onChangeText={(tila) => this.setState({tila})}*/}
                        {/*value={this.state.tila}/>*/}


                        <View style={styles.buttoncontainer}>
                            <Button color="#0ff5b4" title='Muokkaa' onPress={() => this.muokkaa()} />
                            <Button color="#0ff5b4" title='Poista' onPress={() => this.poista()} />
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