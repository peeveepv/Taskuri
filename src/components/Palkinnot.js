import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Text, Alert } from 'react-native';

export default class Palkinnot extends React.Component {
    static navigationOptions = {
        header: null,
        showIcon: true,
        tabBarIcon: ( {tintColor }) => {
            return <Image
                source={require('../kuvat/kirstu.png')}
                style={{width: 26, height: 26, tintColor: tintColor}}
            />;
        }
    };

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