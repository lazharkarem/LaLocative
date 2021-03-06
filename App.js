/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import { DrawerContent } from './screens/drawerContent';

import MainTabScreen from './screens/mainTabScreen';
import RootStackScreen from './screens/RootStackScreen';


import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

  const App = () => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const initialLoginState = {
      isLoading: true,
      userName:null,
      userToken:null,
    };

    const CustomDefaultTheme = {
      ...NavigationDefaultTheme,
      ...PaperDefaultTheme,
      colors:{
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background:'#ffffff',
        text:'#333333',
      },
    };

    const CustomDarktTheme = {
      ...NavigationDarkTheme,
      ...PaperDarkTheme,
      colors:{
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background:'#333333',
        text:'#ffffff',
      },
    };

    const theme = isDarkTheme ? CustomDarktTheme : CustomDefaultTheme;

    const loginReducer = (prevState, action)=>{
      switch (action.type) {
        case 'RETRIEVE_TOKEN':
          return {
            ... prevState,
            isLoading:false,
          };
        case 'LOGIN':
          return {
            ... prevState,
            userName: action.id,
            userToken:action.token,
            isLoading:false,
          };
        case 'LOGOUT':
          return {
            ... prevState,
            userName: null,
            userToken: null,
            isLoading:false,
          };
        case 'REGISTER':
          return {
            ... prevState,
            userName: action.id,
            userToken:action.token,
            isLoading:false,
          };
      }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer,initialLoginState);

    const authContext = React.useMemo(()=>({
      signIn: async(foundUser)=>{
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;
          try {
            await AsyncStorage.setItem('userToken',userToken);
          }
          catch (e) {
            console.log(e);
          }
        dispatch({type: 'LOGIN', id:userName, token: userToken});
      },
      signOut: async()=>{
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp:()=>{
      },

      toggleTheme: ()=> {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),[]);

    useEffect(() => {
      setTimeout(async()=>{
        let userToken;
        userToken = null;
        try {
          userToken = await AsyncStorage.getItem('userToken');
        }
        catch (e) {
          console.log(e);
        }
        dispatch({type: 'REGISTER', token: userToken});
      }, 1000);

    },[]);
    if (loginState.isLoading) {
      return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}} >
          <ActivityIndicator size="large"/>

        </View>
      );
    }
    return (
      <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme} >
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name=" " component={MainTabScreen} />
          </Drawer.Navigator>
        )
      :
      <RootStackScreen/>
      }
      </NavigationContainer>
  </AuthContext.Provider>
  </PaperProvider>

    );

  };

  export default App;












////////////////////////////////////////////////////////////////////////////
// import 'react-native-gesture-handler';
// import React, {Component} from 'react';
// import MyTab from './navigation/tab';
// import MyDrawer from './navigation/drawer';
// import HomeScreen from './screens/home';
// import { DrawerContent } from './screens/drawerContent';
// import { createDrawerNavigator } from '@react-navigation/drawer';


// import { NavigationContainer } from '@react-navigation/native';
// import DetailsScreen from './screens/details';
// import MainTabScreen from './screens/mainTabScreen';
// import RootStackScreen from './screens/RootStackScreen';




// const Drawer = createDrawerNavigator();

// export default class App extends Component {

//   render() {
//       return (
      //   <NavigationContainer>
      //     <RootStackScreen/>

      // <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      //   <Drawer.Screen name=" " component={MainTabScreen} />
      // </Drawer.Navigator>


      // </NavigationContainer>



//       );
//   }
// }
