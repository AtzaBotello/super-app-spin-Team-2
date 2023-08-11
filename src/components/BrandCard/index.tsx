import { Card } from '@femsa-core'
import { brandCardStyles } from '@theme/brands.styles'
import { View, Text } from 'react-native'
import BrandIcon from '../BrandIcon'
import React, { PropsWithChildren } from 'react'

type Props = {
  brand: string
} & PropsWithChildren

const BrandCard = ({ brand, children }: Props) => {
  return (
    <Card style={{ ...brandCardStyles.container }}>
      <View style={brandCardStyles.cartContent}>
        <View style={{ marginBottom: 10 }}>
          <View style={brandCardStyles.iconShadow} />
          <BrandIcon brand={brand} iconProps={{ width: 80, height: 80 }} />
        </View>
        <Text style={brandCardStyles.entityText}>{brand}</Text>
        {children}
      </View>
    </Card>
  )
}

export default BrandCard
