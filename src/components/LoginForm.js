import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Login from 'react-native-simple-login';

// Kertoo mistä kirjautumistiedot löytyy, aka meidän herokusivu
const urli = 'https://taskuri.herokuapp.com/kayttaja/kaikki';

//Loginformi, aka kaiken sälän containeri
class LoginForm extends Component {
  state = { ryhmaID: '', nimi: '', salasana: '', error: '', loading: false };

  onButtonPress() {
    const { ryhmaID, nimi, salasana } = this.state;

    this.setState({ error: '', loading: true });

    urli.auth().signInWithEmailAndPassword(ryhmaID, nimi, salasana)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        urli.auth().createUserWithEmailAndPassword(ryhmaID, nimi, salasana)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Kirjautuminen epäonnistui', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      familyname: '',
      username: '',
      password: '',
      loading: false,
      error: ''
    });
  }

// Estää freezin, aka pallura pyörii tietoja haettaessa
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Kirjaudu sisään
      </Button>
    );
  }

// Näyttää käyttäjälle fieldit joihin käyttäjätiedot täytetään
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Perheen nimi"
            label="ryhmaID"
            value={this.state.ryhmaID}
            onChangeText={ryhmaID => this.setState({ ryhmaID })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="Oma nimi"
            label="nimi"
            value={this.state.nimi}
            onChangeText={nimi => this.setState({ nimi })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="Salasana"
            label="salasana"
            value={this.state.salasana}
            onChangeText={salasana => this.setState({ salasana })}
          />
        </CardSection>

// Jos tulee erroria, näytä se tässä
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

// Lähetä nappi joka starttaa funktion
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

// Errori punaiseksi
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
