import 'react-native-gesture-handler'
import React from 'react'
import { AppProviders } from '@context/AppProviders'
import { AppNavigation } from './navigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <AppProviders>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </AppProviders>
  )
}

export default App
