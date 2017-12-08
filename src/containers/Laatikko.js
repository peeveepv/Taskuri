import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';


//tällä sivulla luodaan hyvin yksinkertainen laatikko, jota uudelleenkäytetään taskien ja palkintojen listauksessa

export default class Laatikko extends React.Component {

    //{this.props.children} -elementin tilalle tulee
    render() {
        return (

                <ScrollView style={styles[this.props.asettelu]}>
                    <Text style={styles[this.props.asettelu]}>{this.props.laatikonNimi}</Text>
                    {this.props.children}
                </ScrollView>
        );
    }
}


// tässä asetetaan laatikon nimen ja tyylin suhteen oletusarvot, jotka voi asettaa uudelleenkäytettäessä propsien avulla halutessaan joksikin muuksi
Laatikko.defaultProps = {
    laatikonNimi: 'oletusnimi',
    asettelu: 'oletustyyli'
};




const styles = StyleSheet.create({
    oletustyyli: {
        flex: 1,
        backgroundColor: 'yellow',
        margin: 20,
    },

});