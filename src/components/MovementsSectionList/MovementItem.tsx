import { View, Text } from 'react-native'
import React from 'react'
import { Movement } from '@src/types'

type Props = {
  movement: Movement
}

const MovementItem = ({ movement }: Props) => {
  return (
    <View testID="movement-list-item">
      <Text>{movement.entity}</Text>
    </View>
  )
}

export default MovementItem
