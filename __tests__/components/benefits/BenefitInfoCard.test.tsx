/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from '@femsa-core'
import { BenefitInfoCard } from '../../../src/components/BenefitInfoCard'

describe('Benefit Info Card list Test', () => {
  const title = 'Test title'
  const text = 'Test text'
  const image = require('../../../src/assets/images/star.png')
  it('renders correctly with given props', () => {
    const { getByText, getByTestId } = render(
      <BenefitInfoCard title={title} text={text} image={image} />,
      {
        wrapper: ThemeProvider,
      }
    )

    const titleElement = getByText(title)
    const textElement = getByText(text)
    const imageElement = getByTestId('benefit-image')

    expect(titleElement).toBeTruthy()
    expect(textElement).toBeTruthy()
    expect(imageElement).toBeTruthy()
  })
})
