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

const DetailsScreen = ({navigation}) => {
return (
    // eslint-disable-next-line react-native/no-inline-styles
<View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
<Text>Details Screen</Text>

        <Button title="Go To Home Screen"
        onPress={() => navigation.navigate('Home')}
/>

</View>
);
};

export default DetailsScreen;
