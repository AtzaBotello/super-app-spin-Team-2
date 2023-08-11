import { Text } from '@femsa-core'
import React from 'react'
import { movementsTypeTabBarStyles } from './styles'

type Props = { focused: boolean; title: string }

const TabTitle = ({ focused, title }: Props) => {
  return (
    <Text
      style={[
        movementsTypeTabBarStyles.tabBarText,
        focused && movementsTypeTabBarStyles.tabBarTextFocused,
      ]}
    >
      {title}
    </Text>
  )
}

export default TabTitle
