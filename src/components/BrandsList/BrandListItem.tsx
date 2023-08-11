import { Brand } from '@src/types'
import { brandListItemStyles } from '@src/theme/brands.styles'
import { Card } from '@femsa-core'
import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BrandIcon from '../BrandIcon'

type Props = {
  brand: Brand
  onPress?: (brand: Brand) => void
}

const BrandListItem = ({ brand, onPress }: Props) => {
  const onPressItem = () => {
    if (onPress) onPress(brand)
  }

  return (
    <Card style={brandListItemStyles.cardContainer}>
      <TouchableOpacity
        testID="brand-list-item"
        onPress={onPressItem}
        style={brandListItemStyles.touchableContainer}
      >
        <BrandIcon brand={brand.name} iconProps={{ height: 55, width: 55 }} />
        <View style={brandListItemStyles.infoContainer}>
          <Text style={brandListItemStyles.nameText}>{brand.name}</Text>
          <Text style={brandListItemStyles.typeText}>{brand.type}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  )
}

export default BrandListItem
