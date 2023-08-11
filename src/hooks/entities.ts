import { Brand, HookFetch } from '@src/types'
import { useEffect, useState } from 'react'
import { AxiosServer } from '@src/axios-service'

export const useFetchBrands = (): HookFetch<Brand[]> => {
  const [loading, setLoading] = useState(false)
  const [brands, setBrands] = useState<Brand[]>([])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setLoading(true)
    AxiosServer.get<Brand[]>('/brands')
      .then(({ data }) => setBrands(data))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return [brands, { loading, error }]
}
