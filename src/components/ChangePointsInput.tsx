import { View } from 'react-native'
import React from 'react'
import { Text, TextInput } from '@femsa-core'

type Props = {
  amount: string
  minPointsAmount: number
  disabled?: boolean
  onChange: (amount: string) => void
}

const ChangePointsInput = ({
  minPointsAmount,
  disabled,
  onChange,
  amount,
}: Props) => {
  return (
    <View>
      <TextInput
        variant="numeric"
        editable={disabled}
        onChangeText={onChange}
        label={'Monto en pesos'}
        activeColor="red"
        value={amount}
      />
      <Text>El valor minimo que puedes cambiar es {minPointsAmount}</Text>
    </View>
  )
}

export default ChangePointsInput
