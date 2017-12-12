import React, { Component } from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tehtavat from '../components/Tehtavat';
import Palkinnot from '../components/Palkinnot';
import AdminSivu from './AdminSivu'


//Tämä sivu pitää sisällään navigointiominaisuuden. Navigointipalkki näkyy puhelimen alareunassa ja

const styles = StyleSheet.create({
  mainHeader: {
    paddingTop: (Platform.OS === 'android') ? Expo.Constants.statusBarHeight : 20,
    height: ( (Platform.OS === 'android') ? 56 : 44 ) + Expo.Constants.statusBarHeight,
    backgroundColor: 'aquamarine',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerTitle: {
    alignSelf: 'center'
  },
  icon: {
    width: 40,
    height: 35
  }
});

const Paanavigaattori = TabNavigator({
  Tehtävät: {
    screen: Tehtavat,
    navigationOptions: {
      title: 'Tehtävät',
      headerStyle: styles.mainHeader,
      headerTitleStyle: styles.headerTitle,
      swipeEnabled: false,
      tabBarIcon: ({tintColor}) => (
        <Icon
          source={require('../kuvat/kayttaja.png')}
          style={{width: 26, height: 26, color: tintColor}}
        />
      )
    }
  },
  Palkinnot: {
    screen: Palkinnot,
    navigationOptions: {
      title: 'Palkinnot',
      headerStyle: styles.mainHeader,
      headerTitleStyle: styles.headerTitle,
      swipeEnabled: false,
      tabBarIcon: ({tintColor}) => (
        <Icon
          source={require('../kuvat/kirstu.png')}
          style={{width: 26, height: 26, color: tintColor}}
        />
      )
    }
  },
  Admin: {
    screen: AdminSivu,
    navigationOptions: {
      swipeEnabled: false,
      tabBarIcon: ({tintColor}) => (
        <Icon
          source={require('../kuvat/hammasratas.png')}
          style={{width: 26, height: 26, color: tintColor}}
        />
      )
    }
  }
},
  {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
  }
});

export default Paanavigaattori;