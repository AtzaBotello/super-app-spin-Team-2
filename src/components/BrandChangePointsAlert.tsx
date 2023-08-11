import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@theme/colors'
import { AlertIcon } from './atoms/Icons'
import { currencyFormat } from '@utils/numbers'

type Props = {
  minAmount: number
}

const BrandChangePointsAlert = ({ minAmount }: Props) => {
  return (
    <View style={styles.container}>
      <AlertIcon
        fill={Colors.contextualPausedContent}
        style={{ marginHorizontal: 10 }}
      />
      <Text style={styles.alertText}>
        Recuerda que necesitas tener mínimo {currencyFormat(minAmount)} en
        puntos para poder cambiarlos con la marca que elegiste
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.contextualPausedSurface,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 15,
    padding: 25,
  },
  alertText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: Colors.contentPrimary,
  },
})

export default BrandChangePointsAlert
