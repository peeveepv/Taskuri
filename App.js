import React from 'react';
import Paanavigaattori from './src/components/Paanavigaattori';
import LoginForm from './src/components/LoginForm';

//Tämä sivu pitää sisällään navigointiominaisuuden. Navigointipalkki näkyy puhelimen alareunassa.

export default class App extends React.Component {

// Jos löytyy kirjautunut-token renderöidään päänavigaattori
// Jos ei löydy renderöidään Loginformi

  state = {readingStorage: true}
    callback = (token, userId, ryhmaId) => {
      this.setState({
        userID: userId,
        token: token,
        ryhmaID: ryhmaId,
        readingStorage: false
      });
    }
    componentDidMount() {
      var token, ryhmaId, userId;
      AsyncStorage.multiGet(['token', 'userID', 'ryhmaID']).then((data) => {
        if (data[0][0]) {
          token = data[0][0] || null;
          userId = data[0][1] || null;
          ryhmaId = data[0][2] || null;
          this.setState({
            userID: userId,
            token: token,
            ryhmaID: ryhmaId,
            readingStorage: false
          });
        } else {
        // ei löytynyt
        this.setState({readingStorage: false})
      }

    }
  )
}
    render() {
      if (this.state.token)
        return (
            <Paanavigaattori/>
        )
        else if (this.state.readingStorage) {
          return(
          <View>
          Moro
          </View>)
        } else
          return (
            <LoginForm callback={this.callback}/>
        )
    }
}
