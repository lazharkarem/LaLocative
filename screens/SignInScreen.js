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


import { AuthContext } from '../components/context';
import Users from '../model/users';
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';






const SignInScreen = ({navigation}) => {

    const { colors } = useTheme();

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange:false,
        secureTextEntry:true,
        isValidUser:true,
        isValidPassword:true,
    });

    const {signIn} = React.useContext(AuthContext);

    const textInputChange = (val)=>{
        if (val.trim().length > 4 ) {
            setData({
                ...data,
                username:val,
                check_textInputChange: true,
                isValidUser:true,
            });
        } else {
            setData({
                ...data,
                username:val,
                check_textInputChange: false,
                isValidUser:false,
            });
        }

        };

        const handlePasswordChange = (val) => {
            if (val.trim().length > 4 ) {
            setData({
                ...data,
                password: val,
                isValidPassword:true,
            });
        } else {
            setData({
                ...data,
                password:val,
                check_textInputChange: false,
                isValidPassword:false,
            });
        }
        };

        const updateSecureTextEntry = ()=>{
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry,
            });
        };

        const loginHandle = (userName,password) => {
            const foundUser = Users.filter(item => {
                return userName === item.username &&
                        password === item.password;
            });

            if ( data.username.length === 0 || data.password === 0) {
                Alert.alert('Wrong Input!','Username or password field cannot be EMPTY.',[
                    {text: 'Okay'},
                ]);
                return;
            }


            if ( foundUser.length === 0) {
                Alert.alert('Invalid User!','Username or password is incorrect.',[
                    {text: 'Okay'},
                ]);
                return;
            }
            signIn(foundUser);
        };

        const handleValidUser = (val) => {
            if (val.trim().length >= 4) {
                setData({
                    ...data,
                    isValidUser:true,
                });
            } else {
                setData({
                    ...data,
                    isValidUser:false,
                });
            }

        };


    return (
        <View style={styles.container} >
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header} >Welcome!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background,
                }]}
            >
                <Text
                style={[styles.text_footer, {
                    color: colors.text,
                }]}
                >Email</Text>
                <View style={styles.action}>
                    <MaterialIcon
                    name="account-outline"
                    color={colors.text}
                    size={'large'}
                    />
                    <TextInput
                    autoCorrect={false}
                    placeholder="Your Email"
                    style={[styles.textInput , {color: colors.text}]}
                    autoCapitalize="none"
                    onChangeText={(val)=>textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}

                    />
                    {data.check_textInputChange ?
                    <Animatable.View animation="bounceIn">

                    <MaterialIcon
                    name="check-circle-outline"
                    color="green"
                    size="large"
                    />
                    </Animatable.View>
                    : null}
                </View>
                {data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Username must 4 Chars lenght.</Text>
                </Animatable.View>
                    }
                    <Text style={[styles.text_footer, {marginTop:35}, {color: colors.text} ]}>Password</Text>
                <View style={styles.action}>
                    <MaterialIcon
                    name="lock-outline"
                    color={colors.text}
                    size={'large'}
                    />
                    <TextInput
                    placeholder="Your Password"
                    style={[styles.textInput, {color: colors.text}]}
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <MaterialIcon
                        name="eye-off"
                        color="grey"
                        size="large"
                        />
                        :
                        <MaterialIcon
                        name="eye-outline"
                        color="grey"
                        size="large"
                        />}
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must 8 Chars lenght.</Text>
                </Animatable.View>
                    }
                <TouchableOpacity>
                    <Text style={{color:'#009387', marginTop:15}}>Forgot Password</Text>
                </TouchableOpacity>
                <View style={styles.Button}>
                    <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>{loginHandle(data.username, data.password);}}
                    >
                    <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={[styles.signIn, {marginTop:300}]}
                    >
                        <Text style={[styles.textSign, {color:'#fff'}]} >Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}
                    style={[styles.signIn,
                            {borderColor:'#009387',
                            borderWidth:1,
                            marginTop:180}]}>
                        <Text style={[styles.textSign,{
                                        color:'#009387',
                        }]}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
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
