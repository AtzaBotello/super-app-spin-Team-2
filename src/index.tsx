import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from '@femsa-core'
import { NavigationContainer } from '@react-navigation/native'
import { TabNav } from 'navigation/TabNav'

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
