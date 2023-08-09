import dayjs, { QUnitType, Dayjs, ManipulateType } from 'dayjs'

export const addValueToDate = (
  date: Date | Dayjs,
  days: number,
  unit: ManipulateType = 'day'
) => dayjs(date).add(days, unit)

export const differencBetween = (
  firstDate: Date | Dayjs,
  endDate: Date | Dayjs,
  unit: QUnitType
): number => {
  const date1 = dayjs(firstDate)
  const date2 = dayjs(endDate)
  return date1.diff(date2, unit)
}
