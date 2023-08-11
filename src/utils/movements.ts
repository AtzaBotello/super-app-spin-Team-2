import { MONTHS } from '@src/constants/dates'
import { Movement } from '@src/types'
import type { SectionListData } from 'react-native'

export const mapMovementsByDate = (
  movements: Movement[]
): SectionListData<Movement, { title: string }>[] => {
  const movementsByDate: SectionListData<Movement, { title: string }>[] = []

  if (movements.length < 0) return movementsByDate

  movements.forEach((movement) => {
    const date = movement.date
    date.setHours(0, 0, 0, 0)
    movement.date = date
  })

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  yesterday.setHours(0, 0, 0, 0)

  const lastWeekStart = new Date()
  lastWeekStart.setDate(lastWeekStart.getDate() - 7 - lastWeekStart.getDay())
  lastWeekStart.setHours(0, 0, 0, 0)

  const todayMovements = movements.filter(
    ({ date }) => date.getTime() === today.getTime()
  )

  if (todayMovements.length > 0) {
    movementsByDate.push({ title: 'Hoy', data: todayMovements })
    const ids = todayMovements.map((x) => x.id)
    movements = movements.filter((x) => !ids.includes(x.id))
  }

  const yesterdayMovements = movements.filter(
    ({ date }) => date.getTime() === yesterday.getTime()
  )

  if (yesterdayMovements.length > 0) {
    movementsByDate.push({ title: 'Ayer', data: yesterdayMovements })
    const ids = yesterdayMovements.map((x) => x.id)
    movements = movements.filter((x) => !ids.includes(x.id))
  }

  const lastWeekMovements = movements.filter(
    ({ date }) => date >= lastWeekStart
  )

  if (lastWeekMovements.length > 0) {
    movementsByDate.push({ title: 'Semana anterior', data: lastWeekMovements })
    const ids = lastWeekMovements.map((x) => x.id)
    movements = movements.filter((x) => !ids.includes(x.id))
  }

  MONTHS.forEach((month, index) => {
    const monthMovements = movements.filter(
      ({ date }) => date.getMonth() === index
    )

    if (monthMovements.length > 0) {
      movementsByDate.push({
        title: month,
        data: monthMovements,
      })
      const ids = monthMovements.map((x) => x.id)
      movements = movements.filter((x) => !ids.includes(x.id))
    }
  })

  return movementsByDate
}

export const mountByPoints = (points: number) => points / 10
