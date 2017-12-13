import React, { Component } from 'react';
import {TabNavigator,} from 'react-navigation';
import Tehtavat from '../components/Tehtavat';
import Palkinnot from '../components/Palkinnot';
import AdminSivu from "../components/AdminSivu";
//Tämä sivu pitää sisällään navigointiominaisuuden. Navigointipalkki näkyy puhelimen alareunassa ja

const Paanavigaattori = TabNavigator({
    Tehtävät : { screen: Tehtavat },
    Palkinnot: {screen: Palkinnot },
    Admin : {screen: AdminSivu},
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#0ff5b4',
      showIcon: true,
      style: {
        backgroundColor: '#414141',
      },
      indicatorStyle: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
      }
    },
    lazy: true,
  });

export default Paanavigaattori;