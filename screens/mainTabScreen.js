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
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import SettingsScreen from '../screens/settings';
import ProfileScreen from '../screens/profile';
import MyTab from '../navigation/tab';
import MyStack from '../navigation/stack';
import PostScreen from './post';

// const HomeStack = createNativeStackNavigator();
// const DetailsStack = createNativeStackNavigator();

// const Tab = createMaterialBottomTabNavigator();




const MainTabScreen = () => (

  <MyTab/>
);

export default MainTabScreen;


//const MainTabScreen = () => (
  // <Tab.Navigator
  //   initialRouteName="Home"
  //   activeColor="#fff"
  // >
  //   <Tab.Screen
  //     name="Home"
  //     component={HomeStackScreen}
  //     options={{
  //       tabBarLabel: 'Home',
  //       tabBarColor: '#009387',
  //     }}
  //   />
  //   <Tab.Screen
  //     name="Details"
  //     component={DetailsScreen}
  //     options={{
  //       tabBarLabel: 'Details',
  //       tabBarColor: '#1f65ff',
  //     }}
  //   />
  //   <Tab.Screen
  //     name="Profile"
  //     component={ProfileScreen}
  //     options={{
  //       tabBarLabel: 'Profile',
  //       tabBarColor: '#694fad',
  //     }}
  //   />
  //   <Tab.Screen
  //     name="Post"
  //     component={PostScreen}
  //     options={{
  //       tabBarLabel: 'Post',
  //       tabBarColor: '#d02860',
  //     }}
  //   />
  //   <Tab.Screen
  //     name="Settings"
  //     component={SettingsScreen}
  //     options={{
  //       tabBarLabel: 'Settings',
  //       tabBarColor: '#d02860',
  //     }}
  //   />

  // </Tab.Navigator>
//);







// const HomeStackScreen = ({navigation}) => (
// <HomeStack.Navigator screenOptions={{
//       headerStyle: {
//       backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//       fontWeight: 'bold',
//       },
//   }}>
//       <HomeStack.Screen name="Home" component={HomeScreen} options={{
//       title:'Overview',
//       }} />
// </HomeStack.Navigator>
// );

// const DetailsStackScreen = ({navigation}) => (
// <DetailsStack.Navigator screenOptions={{
//       headerStyle: {
//       backgroundColor: '#1f65ff',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//       fontWeight: 'bold',
//       },
//   }}>
//       <DetailsStack.Screen name="Details" component={DetailsScreen}/>
// </DetailsStack.Navigator>
// );
