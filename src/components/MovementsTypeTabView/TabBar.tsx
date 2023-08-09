import { movementsTypeTabBarStyles } from './styles'
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view'
import React from 'react'
import TabTitle from './TabTitle'

const MovementsTypeTabBar = (
  props: SceneRendererProps & { navigationState: NavigationState<Route> }
) => {
  return (
    <TabBar
      {...props}
      indicatorStyle={movementsTypeTabBarStyles.tabBarIndicator}
      style={movementsTypeTabBarStyles.container}
      renderLabel={({ route, focused }) => (
        <TabTitle title={route.title || ''} focused={focused} />
      )}
    />
  )
}

export default MovementsTypeTabBar
