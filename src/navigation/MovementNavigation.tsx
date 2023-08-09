import React from 'react'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import {
  MovementDetailScreen,
  MovementsScreen,
} from '@src/presentation/movements'
import { MovementStackParamList } from '@src/types'

export type MovementDetailScreenProps = NativeStackScreenProps<
  MovementStackParamList,
  'MovementDetailScreen'
>

const MovementStack = createNativeStackNavigator<MovementStackParamList>()

const MovementNavigator = () => {
  return (
    <MovementStack.Navigator
      initialRouteName="MovementsScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <MovementStack.Screen
        name="MovementsScreen"
        component={MovementsScreen}
      />
      <MovementStack.Screen
        name="MovementDetailScreen"
        component={MovementDetailScreen}
      />
    </MovementStack.Navigator>
  )
}

export default MovementNavigator
