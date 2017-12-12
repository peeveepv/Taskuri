import React from 'react';
import { StyleSheet, Text, ScrollView, View} from 'react-native';


//tällä sivulla luodaan hyvin yksinkertainen laatikko, jota uudelleenkäytetään taskien ja palkintojen listauksessa

export default class Laatikko extends React.Component {

    //{this.props.children} -elementin tilalle tulee
    render() {
        return (

            <View style={styles[this.props.asettelu]}>
                <Text>{this.props.asettelu}</Text>
                <ScrollView style={styles[this.props.asettelu]}>
                    {this.props.children}
                </ScrollView>
            </View>
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
