import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BenefitsScreen} from 'src/screens/Benefits/BenefitsScreen';
import {HomeScreen} from 'src/screens/Home/HomeScreen';

const Tab = createBottomTabNavigator();

export const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Beneficios" component={BenefitsScreen} />
      <Tab.Screen name="Cartera" component={BenefitsScreen} />
      <Tab.Screen name="Cuenta" component={BenefitsScreen} />
    </Tab.Navigator>
  );
};
