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
import {
Text,
View,
Button,
StatusBar,
} from 'react-native';

import {useTheme} from '@react-navigation/native';




const HomeScreen = ({navigation}) => {

    const {colors} = useTheme();

    const theme = useTheme();

    return (
    <View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
        <StatusBar barStyle = {theme.dark ? 'light-content' : 'dark-content'}/>
    <Text style={{color: colors.text}}>Home Screen</Text>
        <Button title="Go To Details Screen"
        onPress={() => navigation.navigate('Details')}
    />
    </View>
    );
};

export default HomeScreen;
