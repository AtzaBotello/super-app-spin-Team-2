import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from '@femsa-core'

export const BenefitPointsCard = () => {
  return (
    <View>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <View>
          <Text variant="content-one-semibold" style={{ fontWeight: 'bold' }}>
            Tienes
          </Text>
          <Text
            variant="title-one-semibold"
            style={{ fontWeight: 'bold' }}
            testID="points-text"
          >
            10,657 puntos
          </Text>
          <View style={styles.pointConversionContainer}>
            <Image source={require('../../femsa-core/assets/points.png')} />
            <Text variant="small-body-bold" style={styles.pointConversion}>
              Valen $10657
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../images/blueRibbon.png')}
            style={styles.smallImage}
            testID="prize-card-image"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  pointConversionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  pointConversion: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  smallImage: {
    width: 120,
    height: 120,
    marginBottom: 12,
    alignSelf: 'center',
  },
})
