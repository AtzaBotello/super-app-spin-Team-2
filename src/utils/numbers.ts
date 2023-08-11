export const currencyFormat = (amount: number) => `$${unitsFormat(amount)}`

export const unitsFormat = (value: number) =>
  new Intl.NumberFormat().format(value)
