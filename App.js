/* eslint-disable no-unused-vars */
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

    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const authContext = React.useMemo(()=>({
      signIn:()=>{
        setUserToken('fgkj');
        setIsLoading(false);
      },
      signOut:()=>{
        setUserToken(null);
        setIsLoading(false);
      },
      signUp:()=>{
        setUserToken('fgkj');
        setIsLoading(false);
      },

    }));

    useEffect(() => {
      setTimeout(()=>{
        setIsLoading(false);
      }, 1000);

    },[]);
    if (isLoading) {
      return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}} >
          <ActivityIndicator size="large"/>

        </View>
      );
    }
    return (

      <AuthContext.Provider value={authContext}>

      <NavigationContainer>
        {userToken !== null ? (

          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name=" " component={MainTabScreen} />
          </Drawer.Navigator>
        )
      :
      <RootStackScreen/>
      }
      </NavigationContainer>
  </AuthContext.Provider>

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
