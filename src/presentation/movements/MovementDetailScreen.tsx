import {
  Divider,
  BrandCard,
  InfoSection,
  NavBar,
  ScreenContainer,
} from '@src/components'
import { formatDate } from '@utils/dates'
import { mountByPoints } from '@utils/movements'
import { MovementDetailScreenProps } from '@src/navigation/AppNavigation'
import React from 'react'
import { Text } from '@femsa-core'
import { View } from 'react-native'
import { currencyFormat, unitsFormat } from '@utils/numbers'
import { movementDetailStyles } from '@src/theme/movements.styles'

const MovementDetailScreen = ({ route }: MovementDetailScreenProps) => {
  const {
    params: { movement },
  } = route
  return (
    <ScreenContainer>
      <NavBar title="Detalle de movimiento" withGoBack />
      <View
        style={[
          movementDetailStyles.section,
          movementDetailStyles.cardContainer,
        ]}
      >
        <BrandCard brand={movement.entity}>
          <View style={movementDetailStyles.movementMessageContainer}>
            <Text style={movementDetailStyles.movementMessageText}>
              {movement.operation === 'earned'
                ? 'En esta compra ganaste:'
                : 'Usaste el total de puntos:'}
            </Text>
          </View>
          <Text style={movementDetailStyles.pointsText}>
            <Text style={movementDetailStyles.operationIndicator}>
              {movement.operation === 'earned' ? '+' : '-'}
            </Text>
            {unitsFormat(movement.points)}
          </Text>
        </BrandCard>
      </View>
      <View style={movementDetailStyles.section}>
        <InfoSection
          label="Monto total:"
          value={currencyFormat(mountByPoints(movement.points))}
          containerStyle={movementDetailStyles.sectionInfo}
        />
        <InfoSection
          label="Fecha:"
          value={formatDate(movement.date, 'D/M/YYYY')}
          containerStyle={movementDetailStyles.sectionInfo}
        />
        <InfoSection
          label="Usalos desde el:"
          value={formatDate(movement.date, 'D/M/YYYY')}
          containerStyle={movementDetailStyles.sectionInfo}
        />
      </View>

      <Divider />
      <View style={movementDetailStyles.section}>
        <InfoSection
          label="Número de transacción"
          value={movement.transactionNo}
          direction="column"
          containerStyle={movementDetailStyles.sectionInfo}
        />
      </View>
    </ScreenContainer>
  )
}

export default MovementDetailScreen
