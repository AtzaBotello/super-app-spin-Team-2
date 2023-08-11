export const returnAllyUrl = (ally: string): string => {
  const allies = {
    Volaris: 'http://www.volaris.com',
    'Oxxo Gas': 'https://oxxogas.com',
    Oxxo: 'https://www.oxxo.com',
    'Doña Tota': 'https://donatota.com',
  }

  return allies[ally]
}
