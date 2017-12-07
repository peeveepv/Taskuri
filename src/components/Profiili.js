import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import Tiedonhaku from '../components/Tiedonhaku'

export default class Profiili extends React.Component {
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

    render() {
        return (
            <Tiedonhaku/>
        );
    }
}