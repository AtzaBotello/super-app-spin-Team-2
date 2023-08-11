import { Brand } from '@src/types'
import { BrandListItem } from '@src/components'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { ThemeProvider } from '@femsa-core'
import React from 'react'

describe('Brand list item tests', () => {
  it('Render correctly component', async () => {
    const brand: Brand = { name: 'Volaris', type: 'Vuelos', min: 0 }
    const mockOnPressBrandFn = jest.fn()
    const { getByText } = render(
      <BrandListItem brand={brand} onPress={mockOnPressBrandFn} />,
      {
        wrapper: ThemeProvider,
      }
    )

    expect(getByText(brand.name)).toBeTruthy()
    expect(getByText(brand.type)).toBeTruthy()
  })

  it('Correctly component press action', async () => {
    const brand: Brand = { name: 'Volaris', type: 'Vuelos', min: 0 }
    const mockOnPressBrandFn = jest.fn()

    render(<BrandListItem brand={brand} onPress={mockOnPressBrandFn} />, {
      wrapper: ThemeProvider,
    })

    const brandScreen = screen.getByText(brand.name)

    fireEvent.press(brandScreen)

    expect(mockOnPressBrandFn.mock.calls.length).toBe(1)
  })
})
