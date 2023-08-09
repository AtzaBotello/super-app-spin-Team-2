import { MovementsSectionList, MovementsTypeTabView } from '@components'
import { MOVEMENT_TAB_ROUTES, MovementTypes } from '@constants/movements'
import { NavBar, Text } from '@femsa-core'
import { View } from 'react-native'
import React from 'react'
import { MOVEMENTS } from '@mocks/movements'

const MovementsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* TODO: Implementar el goBack de react nativation */}
      <NavBar variant={'default'}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 18,
          }}
        >
          Movimientos
        </Text>
      </NavBar>
      <MovementsTypeTabView
        tabsItems={MOVEMENT_TAB_ROUTES}
        scenes={{
          [MovementTypes.ALL]: () => (
            <MovementsSectionList movements={MOVEMENTS} />
          ),
          [MovementTypes.OBTAINED]: () => (
            <MovementsSectionList
              movements={MOVEMENTS.filter(
                ({ operation }) => operation === 'earned'
              )}
            />
          ),
          [MovementTypes.USED]: () => (
            <MovementsSectionList
              movements={MOVEMENTS.filter(
                ({ operation }) => operation === 'used'
              )}
            />
          ),
        }}
      />
    </View>
  )
}

export default MovementsScreen
