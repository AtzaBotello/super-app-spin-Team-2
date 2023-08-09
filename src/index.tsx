import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from '@femsa-core'
import {
  MovementDetailScreen,
  // MovementsScreen
} from '@presentation/movements'

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <MovementDetailScreen />
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
