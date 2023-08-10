import { Movement } from '@src/types'
import { useState } from 'react'
import { AxiosServer, isAxiosError } from '@src/axios-service'

const mapMovement = (movement: Movement) => ({
  ...movement,
  date: new Date(movement.date),
  expiryDate: movement.expiryDate && new Date(movement.expiryDate),
})

export const useFetchMovements = (): [
  () => Promise<Movement[]>,
  { loading: boolean },
] => {
  const [loading, setLoading] = useState(false)

  const getMovements = async (): Promise<Movement[]> => {
    try {
      setLoading(true)

      const { data } = await AxiosServer.get<Movement[]>('/history')
      return data.map(mapMovement)
    } catch (error) {
      if (isAxiosError(error)) throw new Error(error.message)
      throw new Error('unknown error')
    } finally {
      setLoading(false)
    }
  }

  return [getMovements, { loading }]
}
