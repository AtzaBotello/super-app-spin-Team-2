import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from '@src/navigation'
import { AppProviders } from '@context/AppProviders'

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
