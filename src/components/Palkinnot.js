import React, { Component } from 'react'
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import { haeAvoimetPalkinnot, haeLukitutPalkinnot } from '../tiedonhakusivut/Palkintohaku'
import LaatikonSisalto from '../containers/LaatikonSisalto'
import Laatikko from '../containers/Laatikko'
import Header from './Header'

export default class Palkinnot extends Component {
  static navigationOptions = {
    header: null,
    showIcon: true,
    tabBarIcon: () => {
      return <Image
        source={require('../kuvat/kirstu.png')}
        style={{width: 26, height: 26, tintColor: '#0ff5b4'}}
      />
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      avoimetPalkinnot: [],
      lukitutPalkinnot: []
    };
  }

  componentDidMount = () => {
    haeAvoimetPalkinnot(18)
      .then((json) => {
        console.log(json);
        this.setState({avoimetPalkinnot: json})
      })
      .catch(function (err) {
        alert('Virhe tiedonhaussa');
      });
    haeLukitutPalkinnot(18)
      .then((json) => {
        console.log(json);
        this.setState({lukitutPalkinnot: json});
      })
      .catch(function (err) {
        alert('Virhe tiedonhaussa');
      });
  }

  render () {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <Header sivunOtsikko={'Palkinnot'}/>
        <Laatikko>
          {this.state.avoimetPalkinnot.map((palkinto) =>
            <LaatikonSisalto key={palkinto.id} lisatieto={palkinto.kuvaus}
                             otsikko={palkinto.nimi} toiminnonNimi={'Lunasta'}
                             toiminto={lunastaPalkinto} kayttajaId={68} muuId={palkinto.id}/>)}
        </Laatikko>
        <Laatikko>
          {this.state.lukitutPalkinnot.map((palkinto) =>
            <LaatikonSisalto key={palkinto.id} lisatieto={palkinto.kuvaus}
                             otsikko={palkinto.nimi} toiminnonNimi={'Lunasta'}
                             toiminto={lunastaPalkinto} kayttajaId={68} muuId={palkinto.id}/>)}
        </Laatikko>
      </View>
    )
  }
}
