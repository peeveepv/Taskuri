import React from 'react';
import Paanavigaattori from './src/components/Paanavigaattori';
import LoginForm from './src/components/LoginForm';

//Tämä sivu pitää sisällään navigointiominaisuuden. Navigointipalkki näkyy puhelimen alareunassa.

export default class App extends React.Component {
  state = {}
    callback = (token) => {
      this.setState({token: token});
    }
    render() {
      if (this.state.token)
        return (
            <Paanavigaattori/>
        )
        else
          return (
            <LoginForm callback={this.callback}/>
        )
    }
}
