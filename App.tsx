import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, ThemeProvider} from '@femsa-core';
import {BenefitsScreen} from './src/screens/Benefits/BenefitsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {TabNav} from 'navigation/TabNav';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
