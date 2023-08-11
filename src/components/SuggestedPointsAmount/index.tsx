import { View, Text } from 'react-native'
import React from 'react'
import { suggestedPointsAmountStyles } from './styles'
import SugguestedTouchable from './SugguestedTouchable'
import { unitsFormat } from '@src/utils/numbers'

type Props = {
  sugestedPoints: number[]
  amount: number
  onPressAmount: (amount: number) => void
}

const SuggestedPointsAmount = ({
  sugestedPoints,
  onPressAmount,
  amount,
}: Props) => {
  return (
    <View style={suggestedPointsAmountStyles.container}>
      {sugestedPoints.map((points) => (
        <View
          key={points}
          style={suggestedPointsAmountStyles.suggestedItemContainer}
        >
          <SugguestedTouchable
            onPressAmount={onPressAmount}
            amount={amount}
            points={points}
          />
          <Text style={suggestedPointsAmountStyles.pointsText}>
            {unitsFormat(points)} puntos
          </Text>
        </View>
      ))}
    </View>
  )
}

export default SuggestedPointsAmount
