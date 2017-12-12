import React from 'react';
import Navigaattori from './src/components/Navigaattori'

//Tämä sivu pitää sisällään navigointiominaisuuden. Navigointipalkki näkyy puhelimen alareunassa.


export default class App extends React.Component {
    render() {
        return (
            <Navigaattori/>
        )
    }
}
