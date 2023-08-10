import { useContext } from 'react'
import { MovementsContext } from '../context/MovementsContex'

export const useMovementsContext = () => {
  const ctxValue = useContext(MovementsContext)

  if (!ctxValue) {
    throw new Error(
      'useMovementsContext must be use within the MovementsContextProvider'
    )
  }

  return ctxValue
}
