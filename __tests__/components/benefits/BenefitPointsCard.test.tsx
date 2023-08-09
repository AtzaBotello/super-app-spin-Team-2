import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from '@femsa-core'
import { BenefitPointsCard } from '../../../src/components/BenefitPointsCard'

describe('Benefit Points Card list Test', () => {
  it('renders correclty', () => {
    const { getByText, getByTestId } = render(<BenefitPointsCard />, {
      wrapper: ThemeProvider,
    })

    const haveText = getByText('Tienes')
    const pointsText = getByTestId('points-text')

    const prizeCardImage = getByTestId('prize-card-image')

    expect(haveText).toBeDefined()
    expect(pointsText).toBeDefined()
    expect(prizeCardImage).toBeDefined()
  })
})
