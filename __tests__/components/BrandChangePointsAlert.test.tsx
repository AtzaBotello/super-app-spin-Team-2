import { BrandChangePointsAlert } from '@src/components'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from '@femsa-core'
import React from 'react'

describe('Brand change points alert test', () => {
  it('Render correctly component', async () => {
    const minAmount = 20
    const { getByText } = render(
      <BrandChangePointsAlert minAmount={minAmount} />,
      {
        wrapper: ThemeProvider,
      }
    )

    const alertMessage = `Recuerda que necesitas tener mínimo ${minAmount} en puntos para poder cambiarlos con la marca que elegiste`
    const alertItem = getByText(alertMessage)
    expect(alertItem).toBeTruthy()
  })
})
