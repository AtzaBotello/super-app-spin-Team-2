import { View, Text } from 'react-native'
import React from 'react'

type Props = {
  testID: string
}

const ListEmptyIndicator = ({ testID }: Props) => {
  return (
    <View testID={testID}>
      <Text>List Empty</Text>
    </View>
  )
}

export default ListEmptyIndicator
