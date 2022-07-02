import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import SignUpScreen from './screens/SignUp';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from 'native-base';

import Deals from './view/Deals';
import { NavBar } from './components/NavBar';
import Welcome from './screens/Welcome';
import { nativeBaseHackTheme } from './theme/NativeBaseHackTheme';

const Stack = createNativeStackNavigator();
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const firebaseConfig = {
    apiKey: 'AIzaSyAYL85a8H6c-_9fU4OtDE6LLTkVOJJIqAg',
    authDomain: 'native-base-hack.firebaseapp.com',
    projectId: 'native-base-hack',
    storageBucket: 'native-base-hack.appspot.com',
    messagingSenderId: '600550657392',
    appId: '1:600550657392:web:b4d14f69840385f6d613b5',
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      console.log('##########################');
      setIsLoggedIn(true);
      setLoading(false);
    } else {
      setIsLoggedIn(false);
      setLoading(false);
    }
  });
  console.log(loading);

  return (
    <NativeBaseProvider theme={nativeBaseHackTheme}>
      <NavigationContainer>
        {false ? (
          <Stack.Navigator>
            <Stack.Screen
              name="loading"
              component={Welcome}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
