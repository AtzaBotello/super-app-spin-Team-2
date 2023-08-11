import React from 'react'
import { Brand } from '@src/types'
import { FlatList } from 'react-native-gesture-handler'
import ListEmptyIndicator from '../atoms/ListEmptyIndicator'
import BrandListItem from './BrandListItem'

type Props = {
  brands: Brand[]
  onPressItem?: (brand: Brand) => void
}

const BrandsList = ({ brands, onPressItem }: Props) => {
  return (
    <FlatList
      data={brands}
      renderItem={({ item }) => (
        <BrandListItem brand={item} onPress={onPressItem} />
      )}
      ListEmptyComponent={() => (
        <ListEmptyIndicator testID="brands-empty-list-indicator" />
      )}
    />
  )
}

export default BrandsList
