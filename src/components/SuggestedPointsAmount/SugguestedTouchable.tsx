import { TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { suggestedPointsAmountStyles } from './styles'
import { Text } from '@femsa-core'
import { Colors } from '@src/theme/colors'

type Props = {
  onPressAmount: (amount: number) => void
  points: number
  amount: number
}

const SugguestedTouchable = ({ amount, points, onPressAmount }: Props) => {
  const amountByPoints = useMemo(() => points / 10, [points])

  return (
    <TouchableOpacity
      onPress={() => onPressAmount(amountByPoints)}
      activeOpacity={0.4}
      style={[
        suggestedPointsAmountStyles.sugguestedTouchable,
        {
          backgroundColor:
            amount === amountByPoints
              ? Colors.contextualInfoSurface
              : Colors.surfaceSecondary,
        },
      ]}
    >
      <Text
        style={[
          suggestedPointsAmountStyles.sugguestedTouchableText,
          {
            color:
              amount === amountByPoints
                ? Colors.primary
                : Colors.contentSecondary,
          },
        ]}
      >
        {points / 10}
      </Text>
    </TouchableOpacity>
  )
}

export default SugguestedTouchable
