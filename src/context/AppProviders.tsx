import React from 'react'
import { ThemeProvider } from '@femsa-core'
import { PropsWithChildren } from 'react'
import { MovementsContextProvider } from './MovementsContex'

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <MovementsContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MovementsContextProvider>
  )
}
