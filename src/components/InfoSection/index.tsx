import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import { infoSectionStyles } from './styles'
import { Colors } from '@src/theme/colors'

type Props = {
  label: string
  value: string | number
  labelTextColor?: string
  valueTextColor?: string
  containerStyle?: ViewStyle
  direction?: 'row' | 'column'
}

const InfoSection = ({
  label,
  value,
  containerStyle,
  labelTextColor = Colors.contentSecondary,
  valueTextColor = Colors.contentSecondary,
  direction = 'row',
}: Props) => {
  const container =
    direction === 'row'
      ? infoSectionStyles.rowContainer
      : infoSectionStyles.columnContainer

  return (
    <View style={[container, containerStyle]}>
      <Text style={[infoSectionStyles.labelText, { color: labelTextColor }]}>
        {label}
      </Text>
      <Text
        style={[infoSectionStyles.infoValueText, { color: valueTextColor }]}
      >
        {value}
      </Text>
    </View>
  )
}

export default InfoSection
