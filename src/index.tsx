import 'react-native-gesture-handler'
import React from 'react'
import { AppProviders } from '@context/AppProviders'
import { AppNavigation } from './navigation'
import { NavigationContainer } from '@react-navigation/native'
import { BottomSheet, SnackBar } from '@femsa-core'
import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
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
