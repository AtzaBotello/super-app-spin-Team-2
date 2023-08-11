import { ChangePointsScreenProps } from '@src/navigation/AppNavigation'
import React from 'react'
import { View, Text } from 'react-native'

const MainScreen = ({ route }: ChangePointsScreenProps) => {
  const { brand } = route.params
  return (
    <View>
      <Text>{brand.min}</Text>
    </View>
  )
}

export default MainScreen
