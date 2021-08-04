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
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  Text,
  // useColorScheme,
  View,
  Button,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
const HomeScreen = ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go To Details Screen"
            onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go To Details Screen .. again"
            onPress={() => navigation.push('Details')}
      />
            <Button title="Go To Home Screen"
            onPress={() => navigation.navigate('Home')}
      />
            <Button title="Go back"
            onPress={() => navigation.goBack()}
      />
            <Button title="Go back to the 1st"
            onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();


const App = () => {

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

export default App;
