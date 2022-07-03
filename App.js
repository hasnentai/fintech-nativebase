import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NativeBaseProvider } from 'native-base';
import { nativeBaseHackTheme } from './theme/NativeBaseHackTheme';

//components
import DetailsDeal from './components/DetailDeal';
import LandingPage from './components/Landing';
import Deals from './components/Deals';

//screens
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme

function App() {
  //states
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
        {loading ? (
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
              component={Deals}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailsDeal"
              component={DetailsDeal}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={LandingPage}
              options={{ headerShown: false }}
            />
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
