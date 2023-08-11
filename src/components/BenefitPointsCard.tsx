import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { PointsCardConvertion } from './PointsCard/PointsCardConvertion'

export const BenefitPointsCard = ({ points }: { points: string }) => {
  return (
    <View>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <PointsCardConvertion title="Tienes" points={points} />
        <View>
          <Image
            source={require('../assets/images/blueRibbon.png')}
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
  pointsText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pointConversionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#C9E9F3',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  pointConversion: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    color: '#006686',
    fontWeight: '600',
    paddingLeft: 5,
  },
  smallImage: {
    width: 120,
    height: 120,
    marginBottom: 12,
    alignSelf: 'center',
  },
})
