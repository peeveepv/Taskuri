import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Header extends Component {
  render () {
    const {viewStyle, textStyle, piste, pisteSisallot} = styles;
    return (
      <View style={viewStyle}>
        <View>
          {this.props.children}
        </View>
        <View>
          <Text style={textStyle}>Jaska</Text>
        </View>
        <View style={pisteSisallot}>
          <Image source={require('../kuvat/icons8-diamond-50.png')}
                 style={{width: 30, height: 30}}/>
          <Text style={piste}>10</Text>
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
    height: 80,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#fff'
  },
  piste: {
    fontSize: 26,
    color: '#fff'
  },
  pisteSisallot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  }


}