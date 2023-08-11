import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from '@femsa-core'
import { BrandCard } from '@components'

describe('Entity card test', () => {
  it('Render correctly component', async () => {
    const brand = 'Volaris'
    const { getByText } = render(<BrandCard brand={brand} />, {
      wrapper: ThemeProvider,
    })

    const brandNameRender = getByText(brand)

    expect(brandNameRender).toBeDefined()
  })
})
