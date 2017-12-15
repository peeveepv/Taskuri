import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Text, Alert } from 'react-native';
import Laatikko from '../containers/Laatikko';



export default class LaatikonSisalto extends Component{

    painanappia() {
        Alert.alert('Lisätietoa: ' + '\n' + this.props.lisatieto);
    }
    
      teeToiminto() {
    this.props.toiminto(this.props.kayttajaId, this.props.muuId);
  }


 render(){
    console.log(this.props.data)
    return(
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          onPress={this.painanappia.bind(this)}
          title={this.props.otsikko}
        />
        <Button color="#0ff5b4"
                onPress={this.teeToiminto.bind(this)}
                title={this.props.toiminnonNimi}
        />
      </View>

    )
  }

}

const styles = StyleSheet.create({
  alternativeLayoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})
