import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { Text } from '@femsa-core'

type Props = {
  testID: string
  title: string
  containerStyle?: ViewStyle
  titleStyle?: TextStyle
}

const SectionListTitle = ({
  testID,
  title,
  containerStyle,
  titleStyle,
}: Props) => {
  return (
    <View testID={testID} style={[containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
})

export default SectionListTitle
