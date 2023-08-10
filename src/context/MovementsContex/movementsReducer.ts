import { MovementsReducerAction, MovementsReducerState } from '../../types'

const initialMovementsReducerValue: MovementsReducerState = {
  movements: [],
  totalPoints: 0,
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
        totalPoints: movements.reduce(
          (current, { points }) => current + points,
          0
        ),
      }
    }
    default:
      return state
  }
}

export { movementsReducer, initialMovementsReducerValue }
