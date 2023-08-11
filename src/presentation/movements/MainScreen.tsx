import {
  MovementsSectionList,
  MovementsTypeTabView,
  NavBar,
  ScreenContainer,
} from '@components'
import { MOVEMENT_TAB_ROUTES, MovementTypes } from '@constants/movements'
import React from 'react'
import { useMovementsContext } from '@hooks/context'

const MovementsScreen = () => {
  const { movements } = useMovementsContext()
  return (
    <ScreenContainer>
      <NavBar title="Movimientos" withGoBack />
      <MovementsTypeTabView
        tabsItems={MOVEMENT_TAB_ROUTES}
        scenes={{
          [MovementTypes.ALL]: () => (
            <MovementsSectionList movements={movements} />
          ),
          [MovementTypes.OBTAINED]: () => (
            <MovementsSectionList
              movements={movements.filter(
                ({ operation }) => operation === 'earned'
              )}
            />
          ),
          [MovementTypes.USED]: () => (
            <MovementsSectionList
              movements={movements.filter(
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
