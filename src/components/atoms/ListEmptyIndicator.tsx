import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@src/theme/colors'

type Props = {
  testID: string
}

const ListEmptyIndicator = ({ testID }: Props) => {
  return (
    <View
      testID={testID}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text
        style={{
          fontSize: 20,
          color: Colors.contentTertiary,
          fontFamily: 'Poppins-SemiBold',
          marginTop: 20,
        }}
      >
        Lista vacía
      </Text>
    </View>
  )
}

export default ListEmptyIndicator
