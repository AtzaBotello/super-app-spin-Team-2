import { Text } from 'react-native'
import React from 'react'
import { NavBar, ScreenContainer } from '@src/components'

const SelectEntityScreen = () => {
  return (
    <ScreenContainer>
      <NavBar title="Cambia tus puntos" withGoBack />
      <Text>SelectEntityScreen</Text>
    </ScreenContainer>
  )
}

export default SelectEntityScreen
