import { Text } from 'react-native'
import React from 'react'
import { NavBar, ScreenContainer } from '@src/components'
import { useFetchBrands } from '@hooks/entities'

const SelectEntityScreen = () => {
  const [brands] = useFetchBrands()

  return (
    <ScreenContainer>
      <NavBar title="Cambia tus puntos" withGoBack />
      <Text>{JSON.stringify(brands)}</Text>
    </ScreenContainer>
  )
}

export default SelectEntityScreen
