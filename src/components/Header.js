import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Header extends Component {
  render () {
    const {viewStyle, textStyle, pistetyyli} = styles;
    return (
      <View style={viewStyle}>
        <View>
          <Text style={pistetyyli}>Käyttäjän pisteet</Text>
        </View>
        <View>
          <Text style={textStyle}>{this.props.sivunOtsikko}</Text>
        </View>
        <View>
          {this.props.children}
        </View>
      </View>
    )
  };
}

const styles = {
  viewStyle: {
    backgroundColor: '#414141',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  pistetyyli: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }


}