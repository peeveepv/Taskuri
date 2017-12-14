import React, { AsyncStorage, Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Login from 'react-native-simple-login';

// Kertoo mistä kirjautumistiedot löytyy, aka meidän herokusivu
const urli = 'https://taskuri.herokuapp.com/kayttaja/login';

//Loginformi, aka kaiken sälän containeri
class LoginForm extends Component {
  state = { ryhmaID: '', nimi: '', salasana: '', error: '', loading: false };

  onButtonPress = () => {
    const { ryhmaID, salasana } = this.state;
    this.setState({ error: '', loading: true });
    login();
  }
  login = () => {
    fetch(urli, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify(!!!!TEE TÄLLE JOTAIN)
    }).then((response)) => {
      return response.json();
    }).then((response)) => {
      if (response.ryhmaID && response.salasana) {
        AsyncStorage.multiSet([
          ['token', response.token],
          ['userID', response.nimi],

        ]);
      } else {
        if (callback) { callback(); }
      }
    )}.done();
  }

  getUser = (userID)=> {
    return fetch(urli + userID, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }


  componentWillMount () {
    var token;
    AsyncStorage.multiGet(['token', 'userID']).then((data)) => {
      if (data[0][1]) {
        token = data[0][1] || null;
        return this.getUser((data[0][1]));
      }
    }).then((user)) => {
      if(user){
        return user.json();
      }else{
        return null;
      }
    }).then((user)) => {

      // redirect aloitussivulle
      this.setState({
        user: user,
        token: token
      })
    }
  }


  onLoginFail() {
    this.setState({ error: 'Kirjautuminen epäonnistui', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      familyname: '',
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
    if (!this.state.ryhmaID) {
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
    } else {
      return(
        <Card>
        <CardSection>
        <Input
        placeholder="Nimesi"
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

        <Button onPress={this.onPainallus.bind(this)}>
        Kirjaudu sisään
        </Button>
        </Card>);
      }
    }
    onPainallus() {
      const { ryhmaID, nimi, salasana } = this.state;
      this.setState({ error: '', loading: true });
      fetch(urli, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(!!!!TEE TÄLLE JOTAIN)
      }).then((response) => {
        return response.json();
      }).then((response) => {
        if (response.token && response.userID) {
          AsyncStorage.multiSet([
            ['token', response.token],
            ['userID', response.userID],
            ['ryhmaID', this.state.ryhmaID]
          ]);
          this.props.callback(response.token);
        } else {
          if (callback) { callback(); }
        }
      )}.done();
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
