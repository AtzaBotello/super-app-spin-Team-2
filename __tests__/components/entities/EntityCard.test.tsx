import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from '@femsa-core'
import { EntityCard } from '@components'

describe('Entity card test', () => {
  it('Render correctly component', async () => {
    const entity = 'Volaris'
    const { getByText } = render(<EntityCard entity={entity} />, {
      wrapper: ThemeProvider,
    })

    const entityNameRender = getByText(entity)

    expect(entityNameRender).toBeDefined()
  })
})
