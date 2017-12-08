import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, Alert, View, StyleSheet, Image, Button, TextInput} from 'react-native';



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
            nimi: 'Nimi',
            salasana: 'Salasana',
            rooli: "Rooli",
            pisteet: 0,
            ryhmaID: 1,
            email: null,
        };
    }

    lisaa() {
        fetch("https://taskuri.herokuapp.com/kayttaja/lisaa", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nimi": this.state.nimi,
                "salasana": this.state.salasana,
                "rooli": this.state.rooli,
                "pisteet": this.state.pisteet,
                "ryhmaID": this.state.ryhmaID,
                "email": this.state.email
            })

        })
            .then((response) => {
                alert("Tiedot tallennettu")
            }).catch((err) => {
            alert(err)
        })
    }



render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={styles.omat}>

                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           onChangeText={(nimi) => this.setState({nimi})}
                           value={this.state.nimi}/>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           onChangeText={(salasana) => this.setState({salasana})}
                           value={this.state.salasana}/>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                           onChangeText={(rooli) => this.setState({rooli})}
                           value={this.state.rooli}/>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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