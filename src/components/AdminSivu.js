import React, { Component } from 'react';
import {Image} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import PalkintoHallinnointi from '../AdminSivut/PalkintoHallinnointi';
import TehtavaHallinnointi from '../AdminSivut/TehtavaHallinnointi';
import KayttajaHallinnointi from '../AdminSivut/KayttajaHallinnointi';
import Oletusnakyma from '../AdminSivut/Oletusnakyma';

export default class AdminSivu extends React.Component {
  static navigationOptions = {
    header: null,
    showIcon: true,
    tabBarIcon: () => {
      return <Image
        source={require('../kuvat/hammasratas.png')}
        style={{width: 26, height: 26, tintColor: '#fff'}}
      />
    }
  }

    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene
                        key="oletus"
                        component={Oletusnakyma}
                        title="Asetukset"
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
                        title="Tehtävät"
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
