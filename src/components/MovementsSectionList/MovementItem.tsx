import { formatDate } from '@src/utils/dates'
import { Movement } from '@src/types'
import { movementsListItemStyles } from '@src/theme/Movements.styles'
import { Text } from '@femsa-core'
import { TouchableOpacity, View } from 'react-native'
import { useMovementNavigation } from '@src/hooks/navigation'
import EntityIcon from '../EntityIcon'
import React from 'react'

type Props = {
  movement: Movement
}

const MovementItem = ({ movement }: Props) => {
  const { navigate } = useMovementNavigation()
  const onPress = () => {
    navigate('MovementDetailScreen', { movement })
  }

  return (
    <TouchableOpacity
      testID="movement-list-item"
      onPress={onPress}
      style={movementsListItemStyles.container}
    >
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
    </TouchableOpacity>
  )
}

export default MovementItem
