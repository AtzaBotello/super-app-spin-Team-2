import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from '@femsa-core'

interface PointsCardProps {
  title: string
  points: string
}

export const PointsCardConvertion = ({ title, points }: PointsCardProps) => {
  return (
    <View>
      <Text variant="content-one-semibold" style={{ fontWeight: 'bold' }}>
        {title}
      </Text>
      <Text
        variant="title-one-semibold"
        style={{ fontWeight: 'bold' }}
        testID="points-text"
      >
        {points} puntos
      </Text>
      <View style={styles.pointConversionContainer}>
        <Image source={require('@femsa-core/assets/points.png')} />
        <Text variant="small-body-bold" style={styles.pointConversion}>
          Valen ${(Number(points) / 10).toFixed(2)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
