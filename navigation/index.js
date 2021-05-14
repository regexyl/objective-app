import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import * as firebase from 'firebase';

import Colors from '../constants/Colors';
import { firebaseConfig } from '../src/firebase/config';
import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.taintedWhite
  }
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


const Stack = createStackNavigator();

export default function Navigation({ colorScheme }) {
  // })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const db = firebase.firestore();

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return setIsLoggedIn(true);
      }
      return setIsLoggedIn(false);
    });
    
  return (
    <NavigationContainer
      linking={LinkingConfiguration} theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
              <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
          ) : (
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          )
        }
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}  >
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ 
        headerShown: true,
        headerTransparent: true,
        headerTintColor: 'black',
        headerBackTitle: 'Back',
        headerBackTitleStyle: {
          color: Colors.accent,
          fontSize: 17,
          marginLeft: 3
        },
        headerLeftContainerStyle: {
          paddingHorizontal: 10
        },
        title: '' 
      }} />
    </AuthStack.Navigator>
  );
}