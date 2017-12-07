import React, { Component } from 'react';
import {TabNavigator,} from 'react-navigation';
import Profiili from './src/components/Profiili';
import Palkinnot from './src/components/Palkinnot';
import AdminSivu from "./src/components/AdminSivu";




const MainScreenNavigator = TabNavigator({
    Profiili : { screen: Profiili },
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


export default class App extends React.Component {
    render() {
        return <MainScreenNavigator/>
    }
}
