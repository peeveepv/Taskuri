import React, { Component } from 'react';
import {Image} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import PalkintoHallinnointi from '../AdminSivut/PalkintoHallinnointi';
import TehtavaHallinnointi from '../AdminSivut/TehtavaHallinnointi';
import KayttajaHallinnointi from '../AdminSivut/KayttajaHallinnointi';
import Oletusnakyma from '../AdminSivut/Oletusnakyma';

export default class AdminSivu extends React.Component {

    render(){
        return(

            <Router>
                <Scene key="root">
                    <Scene
                        key="oletus"
                        component={Oletusnakyma}
                        title="Oletus"
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
                </Scene>
            </Router>

        )
    }

}
