import React, { ComponentType } from 'react'
import { useWindowDimensions } from 'react-native'
import { TabView, SceneMap, Route } from 'react-native-tab-view'
import MovementsTypeTabBar from './TabBar'

type Props = {
  scenes: { [key: string]: ComponentType }
  tabsItems: Route[]
}

const MovementsTypeTabView = ({ scenes, tabsItems }: Props) => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState(tabsItems)

  return (
    <TabView
      renderTabBar={(props) => <MovementsTypeTabBar {...props} />}
      navigationState={{
        index,
        routes: routes.map((route) => ({
          ...route,
          testID: 'movement-type-tab-test-ID',
        })),
      }}
      renderScene={SceneMap(scenes)}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}

export default MovementsTypeTabView
