import { Card } from '@femsa-core'
import { entityCardStyles } from './styles'
import { View, Text } from 'react-native'
import EntityIcon from '../EntityIcon'
import React, { PropsWithChildren } from 'react'

type Props = {
  entity: string
} & PropsWithChildren

const EntityCard = ({ entity, children }: Props) => {
  return (
    <Card style={{ ...entityCardStyles.container }}>
      <View style={entityCardStyles.cartContent}>
        <View style={{ marginBottom: 10 }}>
          <View style={entityCardStyles.iconShadow} />
          <EntityIcon entity={entity} iconProps={{ width: 80, height: 80 }} />
        </View>
        <Text style={entityCardStyles.entityText}>{entity}</Text>
        {children}
      </View>
    </Card>
  )
}

export default EntityCard
