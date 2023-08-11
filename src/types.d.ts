export type Movement = {
  date: Date
  entity: string
  expiryDate?: Date
  giftCode?: string
  id: number
  operation: 'earned' | 'used'
  points: number
  transactionNo: string
}

export type Brand = {
  name: string
  type: string
}

export type AppStackParamList = {
  TabNav: undefined
  MovementsScreen: undefined
  MovementDetailScreen: { movement: Movement }
  SelectBrandScreen: undefined
  ChangePointsScreen: { entity: string }
}

export type MovementsContextState = {
  movements: Movement[]
  totalPoints: number
  setMovements: (movements: Movement[]) => void
}

export type MovementsReducerState = {
  movements: Movement[]
  totalPoints: number
}

export type MovementsReducerAction = {
  type: 'setMovements'
  payload: { movements: Movement[] }
}

export type HookLazyFetch<T> = [
  () => Promise<T>,
  { loading: boolean; error?: object },
]

export type HookFetch<T> = [T, { loading: boolean; error?: object }]
