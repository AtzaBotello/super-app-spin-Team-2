import { formatDate } from '@src/utils/dates'
import { Movement } from '@src/types'
import { movementsListItemStyles } from '@src/theme/Movements.styles'
import { Text } from '@femsa-core'
import { View } from 'react-native'
import React from 'react'
import EntityIcon from '../EntityIcon'

type Props = {
  movement: Movement
}

const MovementItem = ({ movement }: Props) => {
  return (
    <View testID="movement-list-item" style={movementsListItemStyles.container}>
      <View>
        <EntityIcon
          entity={movement.entity}
          iconProps={{ width: 45, height: 45 }}
        />
      </View>
      <View style={movementsListItemStyles.infoContainer}>
        <Text style={[movementsListItemStyles.text, { fontSize: 16 }]}>
          {movement.entity}
        </Text>
        <Text style={[movementsListItemStyles.dateText, { fontSize: 13 }]}>
          {formatDate(movement.date, 'dddd D')}
        </Text>
      </View>
      <View style={movementsListItemStyles.pointsContainer}>
        <Text style={movementsListItemStyles.text}>
          {movement.operation === 'earned' ? '+ ' : '- '}
          {movement.points.toLocaleString('en-US')}
        </Text>
      </View>
    </View>
  )
}

export default MovementItem
