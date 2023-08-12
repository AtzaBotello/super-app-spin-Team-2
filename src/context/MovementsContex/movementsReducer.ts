import { mountByPoints, sumMovementPoints } from '@utils/movements'
import { MovementsReducerAction, MovementsReducerState } from '../../types'

const initialMovementsReducerValue: MovementsReducerState = {
  movements: [],
  totalPoints: 0,
  amountPoints: 0,
}

const movementsReducer = (
  state: MovementsReducerState,
  action: MovementsReducerAction
): MovementsReducerState => {
  switch (action.type) {
    case 'setMovements': {
      const { movements } = action.payload
      return {
        ...state,
        movements,
        amountPoints: mountByPoints(
          sumMovementPoints(movements.filter((x) => x.operation === 'earned'))
        ),
        totalPoints: sumMovementPoints(
          movements.filter((x) => x.operation === 'earned')
        ),
      }
    }
    default:
      return state
  }
}

export { movementsReducer, initialMovementsReducerValue }
