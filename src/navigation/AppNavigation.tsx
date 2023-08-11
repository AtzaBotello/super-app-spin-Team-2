import React from 'react'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import {
  MovementDetailScreen,
  MovementsScreen,
} from '@src/presentation/movements'
import { AppStackParamList } from '@src/types'
import TabNav from './TabNav'

export type MovementDetailScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'MovementDetailScreen'
>

const AppStack = createNativeStackNavigator<AppStackParamList>()

const MovementNavigator = () => {
  return (
    <AppStack.Navigator
      initialRouteName="TabNav"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <AppStack.Screen name="TabNav" component={TabNav} />
      <AppStack.Screen name="MovementsScreen" component={MovementsScreen} />
      <AppStack.Screen
        name="MovementDetailScreen"
        component={MovementDetailScreen}
      />
    </AppStack.Navigator>
  )
}

export default MovementNavigator
