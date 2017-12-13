import React, { Component } from 'react'
import { View, StyleSheet, Image, Button, Text, Alert } from 'react-native'
import Laatikko from '../containers/Laatikko'
import LaatikonSisalto from '../containers/LaatikonSisalto'
import Header from './Header'
import { haeKayttajanTehtavat, haePerheenValisemattomatTehtavat } from '../tiedonhakusivut/Tehtavahaku'

export default class Tehtavat extends React.Component {
  static navigationOptions = {
    header: null,
    showIcon: true,
    tabBarIcon: () => {
      return <Image
        source={require('../kuvat/kayttaja.png')}
        style={{width: 26, height: 26, tintColor: '#0ff5b4'}}
      />
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      omattehtavat: [],
      ryhmantehtavat: [],
    }
  }

  //haetaan käyttäjän omat tehtävät (metodilla haeKayttajanTehtavat) ja ryhmän tehtävät (metodilla haePerheenTehtavat), jotka mapataan render-metodissa
  componentDidMount () {
    haeKayttajanTehtavat(5).then((json) => {
      console.log(json)
      this.setState({omattehtavat: json})
    })
    haePerheenValisemattomatTehtavat(12).then((json) => {
      console.log(json)
      this.setState({ryhmantehtavat: json})
    })
  };

  // tehtävien mappaukset ovat Laatikko-komponentin lapsia (children)
  render () {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>

        <Header sivunOtsikko={'Tehtävät'}>
          <Image source={require('../kuvat/taskuri-tehtavat.png')}
                 style={{width: 60, height: 60}}/>
        </Header>

        <Laatikko>

          {this.state.omattehtavat.map((omatehtava) =>
            <LaatikonSisalto key={omatehtava.id} lisatieto={omatehtava.kuvaus}
                             otsikko={omatehtava.nimi + ' (' + omatehtava.pisteet + ' pistettä)'}/>)}

        </Laatikko>

        <Laatikko laatikonNimi="Koko ryhmän tehtävät">

          {this.state.ryhmantehtavat.map((ryhmantehtava) =>
            <LaatikonSisalto key={ryhmantehtava.id} lisatieto={ryhmantehtava.kuvaus}
                             otsikko={ryhmantehtava.nimi + ' (' + ryhmantehtava.pisteet + ' pistettä)'}/>)}

        </Laatikko>


      </View>
    )
  }
}

Tehtavat.defaultProps = {
  nappulanNimi: 'Otsikko'
}

