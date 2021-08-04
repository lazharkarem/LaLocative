/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {

} from 'react-native';
import HomeScreen from '../App';
import DetailsScreen from '../App';

const Stack = createNativeStackNavigator();


const MyStack = () => {

return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
                    headerStyle:{
                        backgroundColor:'#009387',
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold',
                    },
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{
            title:'Overview',
            }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
        </NavigationContainer>  );
    };

export default MyStack;
