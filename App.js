/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
// import MyStack from './navigation/stack';
import MyTab from './navigation/tab';


export default class App extends Component {

  render() {
      return (
          <MyTab/>


      );
  }
}
