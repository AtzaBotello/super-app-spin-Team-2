import dayjs, { QUnitType, Dayjs, ManipulateType } from 'dayjs'
import 'dayjs/locale/es'

const localeObject = {
  name: 'es', // name String
  weekdays: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ],
}

dayjs.locale('es', localeObject)

export const formatDate = (date: Date | Dayjs, format: string) =>
  dayjs(date).format(format)

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
