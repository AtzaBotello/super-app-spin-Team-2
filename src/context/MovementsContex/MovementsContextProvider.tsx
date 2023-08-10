import { Movement, MovementsContextState } from '@src/types'
import { MovementsContext } from '.'
import { useEffect, useReducer } from 'react'
import {
  initialMovementsReducerValue,
  movementsReducer,
} from './movementsReducer'
import React from 'react'
import { useFetchMovements } from '@hooks/movements'

export const MovementsContextProvider = ({ ...props }) => {
  const [getMovements] = useFetchMovements()

  const [state, dispatch] = useReducer(
    movementsReducer,
    initialMovementsReducerValue
  )

  useEffect(() => {
    getMovements().then(setMovements).catch(console.error)
  }, [])

  const setMovements = (movements: Movement[]) => {
    dispatch({
      type: 'setMovements',
      payload: { movements },
    })
  }

  const ctxValue: MovementsContextState = {
    ...state,
    setMovements,
  }

  return <MovementsContext.Provider {...props} value={ctxValue} />
}
