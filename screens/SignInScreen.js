/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Button,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {MaterialIcon} from './Icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';




const SignInScreen = ({navigation}) => {

    const [data, setData]= React.useState({
        email: '',
        password: '',
        check_textInputChange:false,
        secureTextEntry:true,
    });

    const textInputChange = (val)=>{
        if (val !== 0 ) {
            setData({
                ...data,
                email:val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                email:val,
                check_textInputChange: false,
            });
        }

        };
    

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.text_header} >Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <MaterialIcon
                    name="account-outline"
                    color="#05375a"
                    size={'large'}
                    />
                    <TextInput
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val)=>textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                    <MaterialIcon
                    name="check-circle-outline"
                    color="green"
                    size="large"
                    />
                    : null}
                </View>
                <Text style={[styles.text_footer, {marginTop:35} ]}>Password</Text>
                <View style={styles.action}>
                    <MaterialIcon
                    name="lock-outline"
                    color="#05375a"
                    size={'large'}
                    />
                    <TextInput
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    />
                    <MaterialIcon
                    name="eye-off"
                    color="grey"
                    size="large"
                    />
                </View>
            </View>

        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -14,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
