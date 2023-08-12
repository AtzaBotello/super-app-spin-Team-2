import React from 'react'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import {
  MovementDetailScreen,
  MovementsScreen,
} from '@src/presentation/movements'
import {
  ChangePointsScreen,
  SelectBrandScreen,
} from '@src/presentation/changePoints'
import { DetailMovementScreen } from '../presentation/redeem/screens/DetailMovementScreen'
import { AppStackParamList } from '@src/types'
import TabNav from './TabNav'

export type MovementDetailScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'MovementDetailScreen'
>

export type ChangePointsScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'ChangePointsScreen'
>

export type DetailMovementScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'DetailMovementScreen'
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
      <AppStack.Screen
        name="ChangePointsScreen"
        component={ChangePointsScreen}
      />
      <AppStack.Screen name="SelectBrandScreen" component={SelectBrandScreen} />
      <AppStack.Screen name="MovementsScreen" component={MovementsScreen} />
      <AppStack.Screen
        name="MovementDetailScreen"
        component={MovementDetailScreen}
      />
      <AppStack.Screen
        name="DetailMovementScreen"
        component={DetailMovementScreen}
      />
    </AppStack.Navigator>
  )
}

export default MovementNavigator
