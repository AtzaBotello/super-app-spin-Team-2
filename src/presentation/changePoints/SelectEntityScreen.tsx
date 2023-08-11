import React from 'react'
import { BrandsList, NavBar, ScreenContainer } from '@src/components'
import { useFetchBrands } from '@hooks/entities'
import { Brand } from '@src/types'

const SelectEntityScreen = () => {
  const [brands] = useFetchBrands()

  const onPressBrand = (brand: Brand) => {
    console.log(brand)
  }

  return (
    <ScreenContainer>
      <NavBar title="Cambia tus puntos" withGoBack />
      <BrandsList brands={brands} onPressItem={onPressBrand} />
    </ScreenContainer>
  )
}

export default SelectEntityScreen
