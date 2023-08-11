import React from 'react'
import { BrandsList, NavBar, ScreenContainer } from '@src/components'
import { useFetchBrands } from '@hooks/entities'
import { Brand } from '@src/types'
import { Text } from '@femsa-core'
import { selectBrandScreenStyles } from '@src/theme/brands.styles'

const SelectBrandScreen = () => {
  const [brands] = useFetchBrands()

  const onPressBrand = (brand: Brand) => {
    console.log(brand)
  }

  return (
    <ScreenContainer containerStyle={selectBrandScreenStyles.container}>
      <NavBar title="Cambia tus puntos" withGoBack />
      <Text style={selectBrandScreenStyles.message}>
        Elige la marca aliada en la que quieres usar tus puntos
      </Text>
      <BrandsList brands={brands} onPressItem={onPressBrand} />
    </ScreenContainer>
  )
}

export default SelectBrandScreen
