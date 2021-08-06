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
} from 'react-native';




const HomeScreen = ({navigation}) => {
    return (
    <View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
    <Text>Home Screen</Text>
        <Button title="Go To Details Screen"
        onPress={() => navigation.navigate('Details')}
    />
    </View>
    );
};

export default HomeScreen;
