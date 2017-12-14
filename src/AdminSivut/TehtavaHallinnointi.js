import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import Laatikko from '../containers/Laatikko';
import LaatikonSisalto from "../containers/LaatikonSisalto";
import AdminLaatikonSisalto from '../containers/LaatikonSisalto';
import {haePerheenValisemattomatTehtavat, lisaaTehtava, muokkaaTehtavaa, poistaTehtava, haePerheenKaikkiTehtavat} from "../tiedonhakusivut/Tehtavahaku";
import ToggleNappi from '../containers/ToggleNappi'
import {StackNavigator,} from 'react-navigation';
import { Actions } from 'react-native-router-flux';



export default class TehtavaHallinnointi extends Component {

    static navigationOptions = {
        title: 'Tehtävien hallinnointi',
    };

    constructor(){
        super();
        this.state ={
            ryhmankaikkitehtavat: [],
            tehtavaid: '',
        };
    }

    componentDidMount() {
        haePerheenKaikkiTehtavat(7).then((json) => {
            this.setState({ryhmankaikkitehtavat: json});
        });
    };


    siirryTehtavaan(indeksi) {
        console.log('You clicked: ' + indeksi);
        Actions.tehtavalisays()
    }



render() {
        return (

            <Laatikko laatikonNimi="Kaikki ryhmän tehtävät">
                <Text>Tehtävän otsikkoa klikkaamalla muokkaukseen</Text>
                <Text> </Text>
            <ScrollView style={styles.container}>
                {this.state.ryhmankaikkitehtavat.map((item, index) => {
                    return (
                        <View key={item.id}>
                            <Button
                                color="#0ff5b4"
                                title={item.nimi}
                                onPress={(title)=>{this.siirryTehtavaan(item.id)}}
                            />
                        </View>
                    )
                })}
            </ScrollView>
            </Laatikko>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        padding: 20
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 10,
    },

    nappicontainer: {
        backgroundColor: '#0ff5b4',
        paddingVertical: 20,

    },

    teksti: {
        textAlign: 'center',
        color: 'white',
    }

});


{/*<ScrollView style={styles.container}>*/}

{/*<View>*/}
{/*{this.state.ryhmankaikkitehtavat.map((ryhmantehtava) =>*/}
{/*<Button key={ryhmantehtava.id} title={ryhmantehtava.nimi}*/}
{/*onPress={(key) => this.muokkaaYksittainenTehtava({ryhmantehtava.id})}*/}
{/*/>*/}
{/*)}*/}
{/*</View>*/}
{/*</ScrollView>*/}
