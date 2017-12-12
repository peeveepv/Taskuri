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
            activeTintColor: '#e91e63',
            showIcon: true,
        },
        lazy: true,
    });

export default Paanavigaattori;