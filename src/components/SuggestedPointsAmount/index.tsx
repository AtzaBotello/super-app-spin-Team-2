import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  sugestedPoints: number[]
  onPressAmount: (amount: number) => void
}

const SuggestedPointsAmount = ({ sugestedPoints, onPressAmount }: Props) => {
  return (
    <View>
      {sugestedPoints.map((points) => (
        <View key={points}>
          <TouchableOpacity onPress={() => onPressAmount(points / 10)}>
            <Text>{points / 10}</Text>
          </TouchableOpacity>
          <Text>{points} puntos</Text>
        </View>
      ))}
    </View>
  )
}

export default SuggestedPointsAmount
