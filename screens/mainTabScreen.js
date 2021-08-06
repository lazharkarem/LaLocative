/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import SettingsScreen from '../screens/settings';
import ProfileScreen from '../screens/profile';
import MyTab from '../navigation/tab';
import MyStack from '../navigation/stack';

//import PostScreen from '../screens/post';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();


const MainTabScreen = () => (
    <MyTab/>
);


const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <MyStack/>
  );

export default MainTabScreen;
