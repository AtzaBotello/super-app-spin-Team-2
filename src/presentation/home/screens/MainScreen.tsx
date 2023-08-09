import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text } from '@femsa-core'
import IconPhone from 'src/components/home/phoneHomeIcon'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <IconPhone />
        <Text variant="subtitle-semibold">Pantalla home</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
