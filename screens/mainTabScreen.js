/* eslint-disable react-native/no-inline-styles */
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
import  { Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from './profile';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import SettingsScreen from '../screens/settings';
import PostScreen from '../screens/post';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    screenOptions={{
    tabBarShowLabel:false,
    headerShown: false,
    activeColor : '#fff',
}}>
    <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center',top:10}} >
                    <Image
                    source={require('../assets/icons/home.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12 }} >Home</Text>
                </View>
            ),
        }}
        />
    <Tab.Screen name="Details" component={DetailsScreen}options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center',top:10}} >
                    <Image
                    source={require('../assets/icons/details.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12 }} >Details</Text>
                </View>
            ),
        }}
        />
        <Tab.Screen name="Post" component={PostScreen}options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center',top:10}} >
                    <Image
                    source={require('../assets/icons/add.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12 }} >Posts</Text>
                </View>
            ),
        }}
        />
    <Tab.Screen name="Profile" component={ProfileScreen}options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center',top:10}} >
                    <Image
                    source={require('../assets/icons/profile.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12 }} >Profile</Text>
                </View>
            ),
        }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center',top:10}} >
                    <Image
                    source={require('../assets/icons/settings.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#e32f45' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12 }} >Settings</Text>
                </View>
            ),
        }}
        />
        </Tab.Navigator>

);

export default MainTabScreen;

