import { View, Text } from 'react-native'
import React from 'react'

type Props = {
  minAmount: number
}

const BrandChangePointsAlert = ({ minAmount }: Props) => {
  return (
    <View>
      <Text>
        Recuerda que necesitas tener mínimo {minAmount} en puntos para poder
        cambiarlos con la marca que elegiste
      </Text>
    </View>
  )
}

export default BrandChangePointsAlert
