import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import KayttajaHallinnointi from '../AdminSivut/KayttajaHallinnointi';
import PalkintoHallinnointi from '../AdminSivut/PalkintoHallinnointi';
import TehtavaHallinnointi from '../AdminSivut/TehtavaHallinnointi';


const Oletusnakyma = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.welcome}
                onPress={() => Actions.kayttajat()}>
                Käyttäjien hallinnointisivu
            </Text>
            <Text
                style={styles.welcome}
                onPress={() => Actions.tehtavat()}>
                Tehtävien hallinnointisivu
            </Text>
            <Text
                style={styles.welcome}
                onPress={() => Actions.palkinnot()}>
                Palkintojen hallinnointisivu
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#493742',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default Oletusnakyma;