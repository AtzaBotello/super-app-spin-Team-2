import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@femsa-core'

interface RowProps {
  title: string
  value: string
}

export const DetailedInfoRow = ({ title, value }: RowProps) => {
  return (
    <View style={[styles.row, styles.rowInfo]}>
      <Text style={styles.valueTitle}>{title}: </Text>
      <Text style={styles.textValue}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInfo: {
    marginVertical: 10,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  textValue: {
    fontWeight: '600',
    fontSize: 16,
  },
})
