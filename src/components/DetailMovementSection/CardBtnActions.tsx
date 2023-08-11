import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from '@femsa-core'

interface CardBtnProps {
  useOnPress: () => void
  saveOnPress: () => void
}

export const CardBtnActions = ({ useOnPress, saveOnPress }: CardBtnProps) => {
  return (
    <View style={styles.infoPointsCard}>
      <View style={styles.btnContainer}>
        <Button
          variant="primary"
          text="Usar certificado de regalo"
          size="default"
          onPress={useOnPress}
        />
      </View>

      <View>
        <Button
          variant="secondary"
          text="Guardar para otro momento"
          size="default"
          onPress={saveOnPress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoPointsCard: {
    paddingTop: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6EC',
  },
  btnContainer: {
    paddingVertical: 10,
  },
})
