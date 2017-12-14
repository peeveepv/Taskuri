import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';


const Oletusnakyma = () => {
    return (
        <View style={styles.container}>
                <Image source={require('../kuvat/taskuri-logo.png')} style={styles.logo}/>

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
        backgroundColor: 'lightgrey',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',

    },
    logo: {
        height: 200,
        width: 200,
    },

});



export default Oletusnakyma;
