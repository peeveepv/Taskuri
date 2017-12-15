import React, { AsyncStorage, Component } from 'react';
import { Text } from 'react-native';
import { Button } from './common/Button';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Input } from './common/Input';
import { Spinner } from './common/Spinner';
//import Login from 'react-native-simple-login';

// Kertoo mistä kirjautumistiedot löytyy, aka meidän herokusivu
const urli = 'https://taskuri.herokuapp.com/kayttaja/login';
const ryhmaurli = 'https://taskuri.herokuapp.com/ryhma/kirjaudu';

//Loginformi, aka kaiken sälän containeri
class LoginForm extends Component {
  state = { ryhmaID: '', nimi: '', salasana: '', error: '', loading: false };

  onButtonPress = () => {
    const { ryhmaID, salasana } = this.state;
    this.setState({ error: '', loading: true });
    login();
  }

  login = () => {
    fetch(ryhmaurli, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify({nimi: this.state.ryhmaID, salasana: this.state.salasana})
    }).then((response) => {
      //jos 200 kaikki hyvin
      if (response.status === 200) {
      return response.json();
    } else {
      // jos kaikki ei hyvin, esim salasana väärin
      throw new Exception();
    }
    }).then((response) => {
      if (response.ryhmaID && response.salasana) {
        AsyncStorage.multiSet([
          ['token', response.token],
          ['userID', response.nimi],
        ])
      } else {
        if (callback) { callback(); }
      }
    })
    .catch(()=>{
        this.setState({ error: 'Kirjautuminen epäonnistui', loading: false });
    })
    .done();
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
        body: JSON.stringify({})
      }).then((response) => {
        return response.json();
      }).then((response) => {
        if (response.token && response.userID) {
          AsyncStorage.multiSet([
            ['token', response.token],
            ['userID', response.userID],
            ['ryhmaID', this.state.ryhmaID]
          ]);
          this.props.callback(response.token, response.userID, this.state.ryhmaID);
        } else {
          if (callback) { callback(); }
        }
      }).done();
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
