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
  cardContainer: {
    marginTop: 50,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionInfo: {
    paddingVertical: 8,
  },
  movementMessageContainer: {
    marginTop: 15,
    backgroundColor: Colors.surfaceSecondary,
    width: '80%',
    padding: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movementMessageText: {
    color: Colors.contentPrimary,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  pointsText: {
    color: Colors.contentPrimary,
    fontSize: 35,
    fontFamily: 'Poppins-Bold',
    top: 20,
  },
  operationIndicator: {
    color: Colors.primary,
    fontSize: 35,
    fontFamily: 'Poppins-Bold',
  },
})
