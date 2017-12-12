import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Text, Alert } from 'react-native';
import Laatikko from '../containers/Laatikko';



export default class LaatikonSisalto extends Component{

    painanappia() {
        Alert.alert('Lisätietoa: ' + '\n' + this.props.lisatieto);
    }


    render(){
        console.log(this.props.data)
        return(

            // Bindissä oleva 'this' viittaa tässä yhteydessä Tehtava-luokan scopeen (eli ns. tila-avaruuteen)
            // Ilman bindia ao. {this.painanappia} ei tiedä, mistä scopesta sitä kutsutaan --> eli se pitää bindin avulla liittää johonkin scopeen (
            // (tässä tapauksessa siis tähän kyseiseen Tehtava-luokan scopeen


            <Button
                onPress={this.painanappia.bind(this)}
                title={this.props.otsikko}
            />
        )
    }

}