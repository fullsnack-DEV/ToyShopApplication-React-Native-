import React, {useState, useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loginscreen, Onboardingscreen, Signupscreen} from '../Screens';
import NewLoginScreen from '../Screens/NewLoginScreen';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  //implementation of a logic for onboarding screens

  let isSubscribed = true;

  const [firstLoding, setfirstloding] = useState(null);

  const isFirstlaunched = async () => {
    const result = await AsyncStorage.getItem('alreadylaunched');
    if (result === null) {
      AsyncStorage.getItem('alreadylaunched', 'true');
      setfirstloding(true);
    } else {
      setfirstloding(false);
    }
  };

  useEffect(() => {
    //using asycstorage

    if (isSubscribed) {
      isFirstlaunched();
    }

    return () => (isSubscribed = false);
  }, []);

  //Setting up the route name according to the
  //state

  if (firstLoding === null) {
    return null;
  } else if (firstLoding === true) {
    routename = 'onboarding';
  } else {
    routename = 'Login';
  }

  return (
    <Auth.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routename}>
      <Auth.Screen name="onboarding" component={Onboardingscreen} />
      <Auth.Screen name="Login" component={NewLoginScreen} />
      <Auth.Screen name="Signup" component={Signupscreen} />
    </Auth.Navigator>
  );
}

//auth stack
