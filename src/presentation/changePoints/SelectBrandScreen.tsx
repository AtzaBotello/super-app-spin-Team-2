import React from 'react'
import { BrandsList, NavBar, ScreenContainer } from '@src/components'
import { useFetchBrands } from '@hooks/entities'
import { Brand } from '@src/types'
import { Text } from '@femsa-core'
import { selectBrandScreenStyles } from '@theme/brands.styles'
import { useAppNavigation } from '@hooks/navigation'

const SelectBrandScreen = () => {
  const [brands] = useFetchBrands()
  const { navigate } = useAppNavigation()

  const onPressBrand = (brand: Brand) => {
    navigate('ChangePointsScreen', {
      brand,
    })
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
