import { Brand } from '@src/types'
import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  brand: Brand
  onPress?: (brand: Brand) => void
}
const BrandListItem = ({ brand, onPress }: Props) => {
  const onPressItem = () => {
    if (onPress) onPress(brand)
  }

  return (
    <TouchableOpacity testID="brand-list-item" onPress={onPressItem}>
      <Text>{brand.name}</Text>
      <Text>{brand.type}</Text>
    </TouchableOpacity>
  )
}

export default BrandListItem
