/* eslint-disable no-unused-vars */
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
import MyDrawer from './navigation/drawer';
import HomeScreen from './screens/home';
import { DrawerContent } from './screens/drawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './screens/details';
import MainTabScreen from './screens/mainTabScreen';
import RootStackScreen from './screens/RootStackScreen';




const Drawer = createDrawerNavigator();

export default class App extends Component {

  render() {
      return (
        <NavigationContainer>
          <RootStackScreen/>

      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name=" " component={MainTabScreen} />
      </Drawer.Navigator> */}


      </NavigationContainer>



      );
  }
}
