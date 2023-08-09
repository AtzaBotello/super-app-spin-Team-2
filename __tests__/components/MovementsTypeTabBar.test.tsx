import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import { MovementsTypeTabBar } from '@components'
import { Text, ThemeProvider } from '@femsa-core'
import { MOVEMENT_TAB_ROUTES, MovementTypes } from '@constants/movements'
import { View } from 'react-native'

const DEFAULT_SCENES = {
  [MovementTypes.ALL]: () => (
    <View style={{ flex: 1 }}>
      <Text>All movements</Text>
    </View>
  ),
  [MovementTypes.OBTAINED]: () => (
    <View style={{ flex: 1 }}>
      <Text>Obtained movements</Text>
    </View>
  ),
  [MovementTypes.USED]: () => (
    <View style={{ flex: 1 }}>
      <Text>Used movements</Text>
    </View>
  ),
}

describe('Movements types tab bar test', () => {
  it('Render correctly component', async () => {
    const { queryAllByTestId } = render(
      <MovementsTypeTabBar
        scenes={DEFAULT_SCENES}
        tabsItems={MOVEMENT_TAB_ROUTES}
      />,
      { wrapper: ThemeProvider }
    )

    const tabsItems = await waitFor(() =>
      queryAllByTestId('movement-type-tab-test-ID')
    )

    expect(tabsItems.length).toBe(3)
  })

  // it('call onPress event on tab press', async () => {
  //   const { getAllByText, getAllByTestId } = render(
  //     <MovementsTypeTabBar
  //       scenes={DEFAULT_SCENES}
  //       tabsItems={MOVEMENT_TAB_ROUTES}
  //     />,
  //     { wrapper: ThemeProvider }
  //   )

  //   const elements = getAllByTestId('movement-type-tab-test-ID') // Selecciona el primer elemento con el texto 'Ganados'

  //   fireEvent.press(elements[1].children[0] as ReactTestInstance)

  //   const currentView = await waitFor(() => getAllByText('Obtained movements'))

  //   expect(currentView).toBeTruthy()
  // })
})
