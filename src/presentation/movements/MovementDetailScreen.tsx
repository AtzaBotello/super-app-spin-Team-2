import { View } from 'react-native'
import React from 'react'
import { MOVEMENT } from '@src/__mocks__/movements'
import { mountByPoints } from '@src/utils/movements'
import { Divider, InfoSection } from '@src/components'
import { formatDate } from '@src/utils/dates'

const MovementDetailScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <InfoSection
        label="Monto total:"
        value={mountByPoints(MOVEMENT.points)}
        containerStyle={{ paddingVertical: 8 }}
      />
      <InfoSection
        label="Fecha:"
        value={formatDate(MOVEMENT.date, 'D/M/YYYY')}
        containerStyle={{ paddingVertical: 8 }}
      />
      <InfoSection
        label="Usalos desde el:"
        value={formatDate(MOVEMENT.date, 'D/M/YYYY')}
        containerStyle={{ paddingVertical: 8 }}
      />

      <Divider />
      <InfoSection
        label="Número de transacción"
        value={MOVEMENT.transactionNo}
        direction="column"
        containerStyle={{ paddingVertical: 10 }}
      />
    </View>
  )
}

export default MovementDetailScreen
