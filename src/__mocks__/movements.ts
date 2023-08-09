import { Movement } from '@src/types'

export const MOVEMENT: Movement = {
  entity: 'Oxxo Gas',
  date: new Date(),
  points: 100,
  operation: 'earned',
  transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
  id: 1,
}

export const MOVEMENTS: Movement[] = [
  {
    entity: 'Oxxo Gas',
    date: new Date('Sun Aug 06 2023'),
    points: 100,
    operation: 'earned',
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
    id: 1,
  },
  {
    entity: 'Volaris',
    date: new Date('Sun Aug 01 2023'),
    points: 1000,
    operation: 'earned',
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
    id: 2,
  },
  {
    entity: 'Volaris',
    date: new Date('Sun Aug 01 2023'),
    points: 1000,
    operation: 'earned',
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
    id: 3,
  },
  {
    entity: 'Volaris',
    date: new Date('Sun Aug 01 2023'),
    expiryDate: new Date('Fri Sep 01 2023'),
    points: 1000,
    operation: 'earned',
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
    giftCode: '42738499092812000',
    id: 4,
  },
  {
    entity: 'Oxxo Gas',
    date: new Date(),
    points: 100,
    operation: 'earned',
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
    id: 5,
  },
]
