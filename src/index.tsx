import 'react-native-gesture-handler'
import React from 'react'
import { AppProviders } from '@context/AppProviders'
import { AppNavigation } from './navigation'
import { NavigationContainer } from '@react-navigation/native'
import { BottomSheet, SnackBar } from '@femsa-core'

const App = () => {
  return (
    <AppProviders>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <BottomSheet.Component />
      <SnackBar.Component />
    </AppProviders>
  )
}

export default App
