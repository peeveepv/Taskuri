import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import PalkintoHallinnointi from '../AdminSivut/PalkintoHallinnointi';
import TehtavaHallinnointi from '../AdminSivut/TehtavaHallinnointi';
import KayttajaHallinnointi from '../AdminSivut/KayttajaHallinnointi';
import MuokkaaTehtavaa from '../components/MuokkaaTehtavaa';
import MuokkaaKayttajaa from '../components/MuokkaaKayttajaa';
import MuokkaaPalkintoa from '../components/MuokkaaPalkintoa';
import Oletusnakyma from '../AdminSivut/Oletusnakyma';

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

    render(){
        return(

            <Router>
                <Scene key="root">
                    <Scene
                        key="oletus"
                        component={Oletusnakyma}
                        title="Oletus"
                        titleStyle={styles.title}
                        initial
                    />
                    <Scene
                        key="kayttajat"
                        component={KayttajaHallinnointi}
                        title="Käyttäjät"
                    />

                    <Scene
                        key="tehtavat"
                        component={TehtavaHallinnointi}
                        title="Tehtavat"
                    />

                    <Scene key="palkinnot"
                           component={PalkintoHallinnointi}
                           title="Palkinnot"

                    />
                    <Scene key="tehtavalisays"
                           component={MuokkaaTehtavaa}
                            title="Tehtävän muokkaus"
                   />

                    <Scene key="kayttajalisays"
                           component={MuokkaaKayttajaa}
                           title="Käyttäjän muokkaus"
                    />

                    <Scene key="palkintolisays"
                           component={MuokkaaPalkintoa}
                           title="Palkinnon muokkaus"
                    />
                </Scene>
            </Router>

        )
    }
}


const styles = StyleSheet.create({
    title: {
        color: '#F79E31',
        fontWeight: '900',
        backgroundColor: '#414141'
    }
})
