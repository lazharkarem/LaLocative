/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';



const Tab = createBottomTabNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
  };

const MyTab = () => {

    return (
        <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptionStyle}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
        </NavigationContainer>


    );


};

export default MyTab;
