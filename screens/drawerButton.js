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
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
 
const DrawerButton = ({navigation}) =>(
    <TouchableOpacity style={styles.wrapper}
    onPress={() => {navigation.navigate('DrawerOpen')}}
    >
        <Image 
        source={require('../assets/icons/drawer.png')}
        style={styles.icon}
        />

    </TouchableOpacity>

);

const styles = StyleSheet.create({
    wrapper: {
        marginLeft:10,
    },
    icon: {
        width:24,
        height:24,
    },
});


export default DrawerButton;