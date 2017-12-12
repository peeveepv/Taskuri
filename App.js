import React from 'react';
import Paanavigaattori from './src/components/Paanavigaattori'
import {View} from 'react-native';

//Tämä sivu pitää sisällään navigointiominaisuuden. Navigointipalkki näkyy puhelimen alareunassa.




export default class App extends React.Component {
    render() {
        return (
            <Paanavigaattori/>
        )

    }
}
