import { Colors } from '@src/theme/colors'
import { StyleSheet } from 'react-native'

export const entityCardStyles = StyleSheet.create({
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
