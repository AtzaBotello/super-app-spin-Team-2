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

export const brandCardStyles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  cartContent: {
    alignItems: 'center',
    bottom: '20%',
  },
  iconShadow: {
    width: 88,
    height: 88,
    left: -4.5,
    top: -4,
    borderRadius: 100,
    backgroundColor: 'white',
    position: 'absolute',
    borderColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    zIndex: -1,
  },
  entityText: {
    color: Colors.contentPrimary,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
})

export const brandListItemStyles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    marginVertical: 8,
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  infoContainer: {
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
