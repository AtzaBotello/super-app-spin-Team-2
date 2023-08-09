import { SafeAreaView } from 'react-native'
import React, { PropsWithChildren } from 'react'

const ScreenContainer = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {children}
    </SafeAreaView>
  )
}

export default ScreenContainer
