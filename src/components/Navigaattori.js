import React from 'react';
import { StackNavigator } from 'react-navigation';
import Paanavigaattori from './Paanavigaattori';

const Navigaattori = StackNavigator ({
  App: {
    screen: Paanavigaattori
  }
});

export default Navigaattori;