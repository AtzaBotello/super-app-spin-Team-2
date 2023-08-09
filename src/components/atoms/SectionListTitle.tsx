import { View } from 'react-native'
import React from 'react'
import { Text } from '@femsa-core'

type Props = {
  testID: string
  title: string
}

const SectionListTitle = ({ testID, title }: Props) => {
  return (
    <View testID={testID}>
      <Text>{title}</Text>
    </View>
  )
}

export default SectionListTitle
