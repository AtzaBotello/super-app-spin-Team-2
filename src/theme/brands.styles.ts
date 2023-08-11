import { StyleSheet } from 'react-native'
import { Colors } from './colors'

export const selectBrandScreenStyles = StyleSheet.create({
  container: {
    margin: 15,
  },
  message: {
    color: Colors.contentPrimary,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
})

export const brandListItemStyles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
  },
  touchableContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  infoContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 15,
  },
  nameText: {
    color: Colors.contentPrimary,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  typeText: {
    color: Colors.contentTertiary,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
})
