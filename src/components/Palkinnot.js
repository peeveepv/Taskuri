import React, { Component } from 'react'
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import { haeAvoimetPalkinnot, haeLukitutPalkinnot } from '../tiedonhakusivut/Palkintohaku'

export default class Palkinnot extends Component {
  static navigationOptions = {
    header: null,
    showIcon: true,
    tabBarIcon: ({tintColor}) => {
      return <Image
        source={require('../kuvat/kirstu.png')}
        style={{width: 26, height: 26, tintColor: tintColor}}
      />
    }
  }

  state = {
    avoimetPalkinnot: [],
    lukitutPalkinnot: []
  }

  componentDidMount () {
    let konteksti = this
    haeAvoimetPalkinnot(1)
      .then(function (json) {
        konteksti.setState({avoimetPalkinnot: [json]})
      })
    haeLukitutPalkinnot(1)
      .then(function (json) {
        konteksti.setState({lukitutPalkinnot: [json]})
      })
  }

  render () {
    let avoimetPalkinnot = this.state.avoimetPalkinnot.map(function (palkinto) {
      return (
        <Nimilistaus palkinto={palkinto} key={palkinto.id}/>
      )
    })
      let lukitutPalkinnot = this.state.lukitutPalkinnot.map(function (palkinto) {
        return (
          <Nimilistaus palkinto={palkinto} key={palkinto.id}/>
        )
      })
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <Nimilistaus sisalto={this.props.avoimetPalkinnot}/>
          <Nimilistaus sisalto={this.props.lukitutPalkinnot}/>
        </View>
      )
  }
}