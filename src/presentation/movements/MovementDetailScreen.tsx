import { Divider, InfoSection } from '@src/components'
import { formatDate } from '@src/utils/dates'
import { mountByPoints } from '@src/utils/movements'
import { MovementDetailScreenProps } from '@src/navigation/MovementNavigation'
import { View } from 'react-native'
import React from 'react'

const MovementDetailScreen = ({ route }: MovementDetailScreenProps) => {
  const {
    params: { movement },
  } = route
  return (
    <View style={{ flex: 1 }}>
      <InfoSection
        label="Monto total:"
        value={mountByPoints(movement.points)}
        containerStyle={{ paddingVertical: 8 }}
      />
      <InfoSection
        label="Fecha:"
        value={formatDate(movement.date, 'D/M/YYYY')}
        containerStyle={{ paddingVertical: 8 }}
      />
      <InfoSection
        label="Usalos desde el:"
        value={formatDate(movement.date, 'D/M/YYYY')}
        containerStyle={{ paddingVertical: 8 }}
      />

      <Divider />
      <InfoSection
        label="Número de transacción"
        value={movement.transactionNo}
        direction="column"
        containerStyle={{ paddingVertical: 10 }}
      />
    </View>
  )
}

export default MovementDetailScreen
