import { SafeAreaView, ViewStyle } from 'react-native'
import React, { PropsWithChildren } from 'react'

type Props = {
  containerStyle?: ViewStyle
} & PropsWithChildren
const ScreenContainer = ({ children, containerStyle }: Props) => {
  const styles: ViewStyle = { flex: 1, backgroundColor: 'white' }
  return (
    <SafeAreaView style={[styles, containerStyle]}>{children}</SafeAreaView>
  )
}

export default ScreenContainer
