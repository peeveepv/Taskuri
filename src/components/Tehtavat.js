import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Text, Alert } from 'react-native';
import Laatikko from '../containers/Laatikko';
import Tehtava from "../containers/Tehtava";
import {haeKaikkiKayttajat} from "../tiedonhakusivut/Kayttajahaku";

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
            henkilot: [],
        };
    }

    componentDidMount() {
        haeKaikkiKayttajat().then((json) => {
            console.log(json);
            this.setState({henkilot: json});
        });
    };

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>

                <Laatikko laatikonNimi="testilaatikko">

                    {this.state.henkilot.map((henkilo) =>
                        <Tehtava key={henkilo.id} data={henkilo}/>)}

                </Laatikko>

                <Laatikko/>

            </View>
        );
    }
}

Tehtavat.defaultProps = {
    nappulanNimi: 'Otsikko'
};
