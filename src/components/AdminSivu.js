import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, Alert, View, StyleSheet, Image, Button, TextInput} from 'react-native';
import {lisaaKayttaja} from "../tiedonhakusivut/Kayttajahaku";



export default class AdminSivu extends React.Component {
    static navigationOptions = {
        header: null,
        showIcon: true,
        tabBarIcon: ( {tintColor }) => {
            return <Image
                source={require('../kuvat/hammasratas.png')}
                style={{width: 26, height: 26, tintColor: tintColor}}
            />;
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            nimi: '',
            salasana: '',
            rooli: '',
            pisteet: 1,
            ryhmaID: 1,
            email: '',
        };
    }

    lisaa() {
        lisaaKayttaja(this.state.nimi, this.state.salasana, this.state.rooli, this.state.pisteet, this.state.ryhmaID, this.state.email)
    };



render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={styles.omat}>

                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           placeholder="Syötä nimi"
                           onChangeText={(nimi) => this.setState({nimi})}
                           value={this.state.nimi}/>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           placeholder="Syötä salasana"
                           onChangeText={(salasana) => this.setState({salasana})}
                           value={this.state.salasana}/>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           placeholder="Syötä rooli"
                           onChangeText={(rooli) => this.setState({rooli})}
                           value={this.state.rooli}/>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           placeholder="Syötä pisteet"
                           onChangeText={(pisteet) => this.setState({pisteet})}
                           value={`${this.state.pisteet}`} keyboardType='numeric'/>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           placeholder="Syötä ryhmäID"
                           onChangeText={(ryhmaID) => this.setState({ryhmaID})}
                           value={`${this.state.pisteet}`} keyboardType='numeric'/>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           placeholder="Syötä sähköpostiosoite"
                           onChangeText={(email) => this.setState({email})}
                           value={this.state.email}/>
                <Button title='Lisää käyttäjä' onPress={() => this.lisaa()} />
                </View>
            </View>
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
})
