import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Button, View, ScrollView, Alert} from 'react-native';
import AdminLaatikonSisalto from '../containers/LaatikonSisalto';
import Laatikko from '../containers/Laatikko';
import {haeKaikkiRyhmanKayttajat, poistaKayttaja, lisaaKayttaja} from "../tiedonhakusivut/Kayttajahaku";
import { Actions } from 'react-native-router-flux';


export default class KayttajaHallinnointi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nimi: '',
            salasana: '',
            admin: '',
            pisteet: '',
            ryhmaID: '',
            email: '',
            ryhmankayttajat: [],
        };
    }


    //haetaan käyttäjät(metodilla haeKaikkiRyhmanKayttajat), jotka mapataan render-metodissa
    componentDidMount() {
        haeKaikkiRyhmanKayttajat(7).then((json) => {
            console.log(json);
            this.setState({ryhmankayttajat: json});
        });
    };

    lisaa() {
        lisaaKayttaja(this.state.nimi, this.state.salasana, this.state.admin, this.state.pisteet, this.state.ryhmaID, this.state.email);
        Alert.alert('Käyttäjä lisätty');
    };


    poista() {
        poistaKayttaja();
    };

    siirryKayttajaan(indeksi) {
        console.log('You clicked: ' + indeksi);
        Actions.kayttajalisays()
    }

    render() {
        return (
            <ScrollView style={{
                flex: 1,
                flexDirection: 'column',
            }}>

                <View style={styles.omat}>


                    <Laatikko laatikonNimi="Kaikki ryhmän jäsenet">
                        <Text>Jäsenen nimeä klikkaamalla muokkaukseen</Text>
                        <Text> </Text>
                    <ScrollView style={styles.container}>
                        {this.state.ryhmankayttajat.map((item, index) => {
                            return (
                                <View key={item.id}>
                                    <Button
                                        color="#0ff5b4"
                                        title={item.nimi}
                                        onPress={(title)=>{this.siirryKayttajaan(item.id)}}
                                    />
                                </View>
                            )
                        })}
                    </ScrollView>
                    </Laatikko>


                    <Laatikko laatikonNimi="Lisää uusi jäsen ryhmään">

                            <Text>Syötä käyttäjänimi</Text>
                            <TextInput style={styles.laatikot}
                                       placeholder="Syötä nimi"
                                       onChangeText={(nimi) => this.setState({nimi})}
                                       value={this.state.nimi}/>
                            <Text>Syötä salasana</Text>
                            <TextInput style={styles.laatikot}
                                       placeholder="Syötä salasana"
                                       onChangeText={(salasana) => this.setState({salasana})}
                                       value={this.state.salasana}/>
                            <Text>Syötä rooli (admin=true, peruskäyttäjä=false)</Text>
                            <TextInput style={styles.laatikot}
                                       placeholder="Syötä rooli (admin=true, peruskäyttäjä=false)"
                                       onChangeText={(admin) => this.setState({admin})}
                                       value={`${this.state.admin}`}/>
                            <Text>Syötä pisteet</Text>
                            <TextInput style={styles.laatikot}
                                       placeholder="Syötä pisteet"
                                       onChangeText={(pisteet) => this.setState({pisteet})}
                                       value={`${this.state.pisteet}`} keyboardType='numeric'/>
                            <Text>Syötä sen ryhmän ID, johon käyttäjä lisätään</Text>
                            <TextInput style={styles.laatikot}
                                       placeholder="Syötä ryhmäID"
                                       onChangeText={(ryhmaID) => this.setState({ryhmaID})}
                                       value={`${this.state.ryhmaID}`} keyboardType='numeric'/>
                            <Text>Syötä sähköpostiosoite</Text>
                            <TextInput style={styles.laatikot}
                                       placeholder="Syötä sähköpostiosoite"
                                       onChangeText={(email) => this.setState({email})}
                                       value={this.state.email}/>
                            <Button color="#0ff5b4" title='Lisää käyttäjä' onPress={() => this.lisaa()} />
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
    laatikot: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 10,
    }
});
