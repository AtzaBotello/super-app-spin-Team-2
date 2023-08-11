import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, TextInput } from '@femsa-core'
import { Colors } from '@src/theme/colors'
import { currencyFormat } from '@src/utils/numbers'

type Props = {
  amount: string
  minPointsAmount: number
  disabled?: boolean
  movementsPointsByBrand: number
  onChange: (amount: string) => void
}

const ChangePointsInput = ({
  minPointsAmount,
  disabled,
  onChange,
  amount,
  movementsPointsByBrand,
}: Props) => {
  return (
    <View>
      {movementsPointsByBrand >= 1000 && (
        <Text style={[styles.text, styles.titleText]}>Otro:</Text>
      )}
      <TextInput
        variant="numeric"
        editable={disabled}
        onChangeText={onChange}
        label={'Monto en pesos'}
        activeColor="red"
        value={amount}
        style={styles.input}
      />
      <Text style={[styles.text, styles.alertText]}>
        El valor minimo que puedes cambiar es {currencyFormat(minPointsAmount)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
  titleText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    marginVertical: 10,
    height: 50,
  },
  alertText: {
    marginLeft: 10,
    fontSize: 12,
    color: Colors.contentTertiary,
  },
})

export default ChangePointsInput
