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
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
          marginBottom: 10,
        }}
      >
        Otro:
      </Text>
      <TextInput
        variant="numeric"
        editable={disabled}
        onChangeText={onChange}
        label={'Monto en pesos'}
        activeColor="red"
        value={amount}
        style={{ marginVertical: 10 }}
      />
      <Text style={{ marginLeft: 10 }}>
        El valor minimo que puedes cambiar es {minPointsAmount}
      </Text>
    </View>
  )
}

export default ChangePointsInput
