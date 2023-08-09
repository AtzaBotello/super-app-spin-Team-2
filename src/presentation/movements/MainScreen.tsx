import {
  MovementsSectionList,
  MovementsTypeTabView,
  NavBar,
  ScreenContainer,
} from '@components'
import { MOVEMENT_TAB_ROUTES, MovementTypes } from '@constants/movements'
import React from 'react'
import { MOVEMENTS } from '@mocks/movements'

const MovementsScreen = () => {
  return (
    <ScreenContainer>
      {/* TODO: Implementar el goBack de react nativation */}
      <NavBar title="Movimientos" withGoBack />
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
    </ScreenContainer>
  )
}

export default MovementsScreen
