import { Brand } from '@src/types'
import { BrandsList } from '@src/components'
import { FlatList } from 'react-native'
import { render, waitFor } from '@testing-library/react-native'
import { ThemeProvider } from '@femsa-core'
import React from 'react'

describe('Brands list tests', () => {
  it('Render correctly component', async () => {
    const brandsList = render(<BrandsList brands={[]} />, {
      wrapper: ThemeProvider,
    })

    expect(brandsList.UNSAFE_getAllByType(FlatList).length).toBe(1)
  })

  it('Render correctly empty list', async () => {
    const { getByTestId } = render(<BrandsList brands={[]} />, {
      wrapper: ThemeProvider,
    })

    const emptyListComponent = getByTestId('brands-empty-list-indicator')

    expect(emptyListComponent).toBeDefined()
  })

  it('Render correctly list item component', async () => {
    const brands: Brand[] = [{ name: 'Volaris', type: 'Vuelos' }]
    const { getAllByTestId, getByText } = render(
      <BrandsList brands={brands} />,
      {
        wrapper: ThemeProvider,
      }
    )

    const brandsNames = brands.map(({ name }) => name)
    const brandsListItems = await waitFor(() =>
      getAllByTestId('brand-list-item')
    )

    expect(brandsListItems.length).toBe(brandsNames.length)

    const elements = await Promise.all(
      brandsNames.map((brandName) => waitFor(() => getByText(brandName)))
    )

    elements.forEach((element) => {
      expect(element).toBeTruthy()
    })
  })
})
