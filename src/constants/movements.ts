import { Route } from 'react-native-tab-view'

export enum MovementTypes {
  ALL = 'ALL',
  USED = 'USED',
  OBTAINED = 'OBTAINED',
}

export const MOVEMENT_TAB_ROUTES: Route[] = [
  { key: MovementTypes.ALL, title: 'Todos' },
  { key: MovementTypes.OBTAINED, title: 'Ganados' },
  { key: MovementTypes.USED, title: 'Usados' },
]
