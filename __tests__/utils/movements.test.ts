import { MOVEMENT } from '@src/__mocks__/movements'
import { addValueToDate } from '@src/utils/dates'
import { mapMovementsByDate } from '@utils/movements'

describe('Movements list format', () => {
  it('Empty formatted movements list', async () => {
    const movementsList = mapMovementsByDate([])
    expect(movementsList.length).toBe(0)
  })

  it('Formatted movements list includes items for today', async () => {
    const movementsList = mapMovementsByDate([
      { ...MOVEMENT, date: new Date() },
    ])

    const hasTodayMovements = movementsList.some(({ title }) => title === 'Hoy')

    expect(hasTodayMovements).toBeTruthy()
  })

  it('Formatted movements list includes items for yesterday', async () => {
    const movementsList = mapMovementsByDate([
      { ...MOVEMENT, date: addValueToDate(new Date(), -1).toDate() },
    ])

    const hasYesterdayMovements = movementsList.some(
      ({ title }) => title === 'Ayer'
    )

    expect(hasYesterdayMovements).toBeTruthy()
  })

  it('Formatted movements list includes items for last week', async () => {
    const movementsList = mapMovementsByDate([
      { ...MOVEMENT, date: addValueToDate(new Date(), -7).toDate() },
    ])

    const hasLastWekMovements = movementsList.some(
      ({ title }) => title === 'Semana anterior'
    )

    expect(hasLastWekMovements).toBeTruthy()
  })

  it('Formatted movements list includes items for last week', async () => {
    const movementsList = mapMovementsByDate([
      { ...MOVEMENT, date: addValueToDate(new Date(), -7).toDate() },
    ])

    const hasLastWekMovements = movementsList.some(
      ({ title }) => title === 'Semana anterior'
    )

    expect(hasLastWekMovements).toBeTruthy()
  })

  it('Formatted movements list includes items for april', async () => {
    const movementsList = mapMovementsByDate([
      { ...MOVEMENT, date: addValueToDate(new Date(), -4, 'months').toDate() },
    ])

    const hasMovementsInApril = movementsList.some(
      ({ title }) => title === 'Abril'
    )

    expect(hasMovementsInApril).toBeTruthy()
  })
})
