//App Navigator with the Tab Navigation
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Import Icons

//Import Navigators

import {ProfileScreen, FavScreen, CartScreen} from '../Screens';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();
 
export default function AppStack({}) {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Pro" component={ProfileScreen} />
      <Tab.Screen name="Fav" component={FavScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

//MAin Navigator
