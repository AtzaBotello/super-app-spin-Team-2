import React from 'react'
import { BrandsList, NavBar, ScreenContainer } from '@src/components'
import { useFetchBrands } from '@hooks/entities'
import { Brand } from '@src/types'
import { Text } from '@femsa-core'
import { selectBrandScreenStyles } from '@theme/brands.styles'
import { useAppNavigation } from '@hooks/navigation'
import { View } from 'react-native'

const SelectBrandScreen = () => {
  const [brands] = useFetchBrands()
  const { navigate } = useAppNavigation()

  const onPressBrand = (brand: Brand) => {
    navigate('ChangePointsScreen', {
      brand,
    })
  }

  return (
    <ScreenContainer>
      <NavBar title="Cambia tus puntos" withGoBack />
      <View style={selectBrandScreenStyles.container}>
        <Text style={selectBrandScreenStyles.message}>
          Elige la marca aliada en la que quieres usar tus puntos
        </Text>
        <BrandsList brands={brands} onPressItem={onPressBrand} />
      </View>
    </ScreenContainer>
  )
}

export default SelectBrandScreen
