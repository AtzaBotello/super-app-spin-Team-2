import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from '@react-navigation/native'
import { AppProviders } from '@context/AppProviders'
import { DetailMovementScreen } from '@presentation/redeem/screens/DetailMovementScreen'
import { BottomSheet, SnackBar } from '@femsa-core'

const App = () => {
  return (
    <AppProviders>
      <ThemeProvider>
        <DetailMovementScreen points="10000" />
        <BottomSheet.Component />
        <SnackBar.Component />
      </ThemeProvider>
    </AppProviders>
  )
}

export default App
