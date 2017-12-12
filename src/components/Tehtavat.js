import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Text, Alert } from 'react-native';
import Laatikko from '../containers/Laatikko';
import LaatikonSisalto from "../containers/LaatikonSisalto";
import {haeKayttajanTehtavat, haePerheenTehtavat} from "../tiedonhakusivut/Tehtavahaku";


export default class Tehtavat extends React.Component {
    static navigationOptions = {
        header: null,
        showIcon: true,
        tabBarIcon: ( {tintColor }) => {
            return <Image
                source={require('../kuvat/kayttaja.png')}
                style={{width: 26, height: 26, tintColor: tintColor}}
            />;
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            tehtavat: [],
        };
    }

    //haetaan dataa metodia hyödyntäen
    componentDidMount() {
        haeKayttajanTehtavat(5).then((json) => {
            console.log(json);
            this.setState({tehtavat: json});
        });
    };


    // tehtävien mappaus ovat Laatikko-komponentin lapsia (childern)

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>

                <Laatikko laatikonNimi='tähän tulee yläpalkki'/>

                <Laatikko laatikonNimi="testilaatikko">

                    {this.state.tehtavat.map((tehtava) =>
                        <LaatikonSisalto key={tehtava.id} lisatieto={tehtava.kuvaus} otsikko={tehtava.nimi}/>)}

                </Laatikko>

                <Laatikko laatikonNimi="testilaatikko">

                    {this.state.tehtavat.map((tehtava) =>
                        <LaatikonSisalto key={tehtava.id} lisatieto={tehtava.kuvaus} otsikko={tehtava.nimi}/>)}

                </Laatikko>


            </View>
        );
    }
}

Tehtavat.defaultProps = {
    nappulanNimi: 'Otsikko'
};
