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
        this.state = { text: 'Kirjoita tähän taskin otsikko' };
    }



    componentDidMount() {
        fetch("https://taskuri.herokuapp.com/kayttaja/lisaa", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nimi: "olio",
                salasana: "testi",
                rooli: "Admin",
                ryhmaId: "2",
                email: "seppo",
            })

        })
            .then((response) => {
                alert("It Work !")
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
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}/>
                <Button title='Lisää task' onPress={() => this.componentDidMount()} />
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