import { StyleSheet } from 'react-native'
import { Colors } from './colors'

export const movementsListStyles = StyleSheet.create({
  padding: { padding: 15 },
})

export const movementsListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  pointsContainer: {
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
  },
})

export const movementDetailStyles = StyleSheet.create({
  detailRowContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  labelText: {
    flex: 1,
    color: Colors.contentSecondary,
    textAlign: 'left',
  },
  infoValueText: {
    flex: 1,
    textAlign: 'right',
  },
})
