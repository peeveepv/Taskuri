import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image, TextInput, ScrollView} from 'react-native';


export default class Palkinnot extends React.Component {
    static navigationOptions = {
        header: null,
        showIcon: true,
        tabBarIcon: ( {tintColor }) => {
            return <Image
                source={require('../kuvat/kirstu.png')}
                style={{width: 26, height: 26, tintColor: tintColor}}
            />;
        }
    };


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://taskuri.herokuapp.com/kayttaja/kaikki')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.nimi}, {rowData.salasana}, {rowData.rooli}, {rowData.pisteet}, {rowData.ryhmaID}, {rowData.email}, </Text>}
                />
            </View>
        );
    }

}