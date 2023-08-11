import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import { ThemeProvider } from '@femsa-core'
import { MovementItem, MovementsSectionList } from '@components'
import { SectionList } from 'react-native'
import { Movement } from '@src/types'
import { mapMovementsByDate } from '@src/utils/movements'
import { MOVEMENT } from '@mocks/movements'

const movements: Movement[] = [{ ...MOVEMENT }]

describe('Movements list test', () => {
  it('Render correctly component', async () => {
    const movementList = render(
      <MovementsSectionList movements={movements} />,
      {
        wrapper: ThemeProvider,
      }
    )

    expect(movementList.UNSAFE_getAllByType(SectionList).length).toBe(1)

    expect(
      movementList.getAllByTestId('movement-section-list-indicator').length
    ).toBe(mapMovementsByDate(movements).length)

    expect(movementList.UNSAFE_getAllByType(MovementItem).length).toBe(
      movements.length
    )
  })

  it('Render correctly empty list', async () => {
    const { getByTestId } = render(<MovementsSectionList movements={[]} />, {
      wrapper: ThemeProvider,
    })

    const emptyListComponent = getByTestId('movement-empty-list-indicator')

    expect(emptyListComponent).toBeDefined()
  })

  it('Render correctly list item component', async () => {
    const { getAllByTestId, getByText } = render(
      <MovementsSectionList movements={movements} />,
      {
        wrapper: ThemeProvider,
      }
    )

    const movementEntities = movements.map(({ entity }) => entity)
    const movementListItems = await waitFor(() =>
      getAllByTestId('movement-list-item')
    )

    expect(movementListItems.length).toBe(movementEntities.length)

    const elementsByEntities = await Promise.all(
      movementEntities.map((entity) => waitFor(() => getByText(entity)))
    )

    elementsByEntities.forEach((element) => {
      expect(element).toBeTruthy()
    })
  })
})
