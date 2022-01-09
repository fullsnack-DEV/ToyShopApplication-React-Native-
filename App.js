/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Main
import MainNavigator from './Navigation/MainNavigator';
//OnboardingStack
//Stack Nav for Onboarding Screens

import OnboradingStack from './Navigation/OnboradingStack';
import AuthStack from './Navigation/AuthStack';

let bool = true;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboardingstack" component={OnboradingStack} />
          <Stack.Screen name="AUthStack" component={AuthStack} />
          <Stack.Screen name="Mainstack" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

//App
