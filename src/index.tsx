import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from '@femsa-core'
import { NavigationContainer } from '@react-navigation/native'
import { MovementNavigator } from '@navigation'

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <MovementNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
