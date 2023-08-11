import { createContext } from 'react'
import { MovementsContextState } from '@src/types'
import { MovementsContextProvider } from './MovementsContextProvider'

const INITIAL_CTX_VALUE: MovementsContextState = {
  movements: [],
  totalPoints: 0,
  amountPoints: 0,
  setMovements: () => {},
}

const MovementsContext = createContext<MovementsContextState>(INITIAL_CTX_VALUE)

export { MovementsContext, MovementsContextProvider }
