import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Text, Alert } from 'react-native';

export default class Tehtavat extends React.Component {
    static navigationOptions = {
        header: null,
        showIcon: true,
        tabBarIcon: ( {tintColor }) => {
            return <Image
                source={require('../kuvat/kayttaja.png')}
                style={{width: 26, height: 26, tintColor: tintColor}}
            />;
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            nimi: 'Nimi',
            salasana: 'salasana',
            pisteet: 0,
        };
    }

    componentDidMount() {
        return fetch('https://taskuri.herokuapp.com/kayttaja/15')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    nimi: responseJson.nimi,
                    salasana: responseJson.salasana,
                    pisteet: responseJson.pisteet,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }



    _onPressButton() {
        Alert.alert('Tässä lisätietoa taskista')
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>

                <View style={styles.omat}>
                    <Text style={styles.otsikko}>Hei, {this.state.nimi}!</Text>
                    <Text style={styles.otsikko}>Tervetuloa Taskuriin!</Text>
                    <Text style={styles.otsikko}>Pistesaldosi on {this.state.pisteet}</Text>
                </View>

                <View style={styles.omat}>
                    <Text style={styles.otsikko}>Omat taskit</Text>
                    <Button
                        onPress={this._onPressButton}
                        title="Taskin nimi"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Taskin nimi"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Taskin nimi"
                    />
                </View>

                <View style={styles.yhteiset}>
                    <Text style={styles.otsikko}>Perheen yhteiset taskit</Text>
                    <Button
                        onPress={this._onPressButton}
                        title="Taskin nimi"
                        color="#841584"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Taskin nimi"
                        color="#841584"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Taskin nimi"
                        color="#841584"
                    />
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