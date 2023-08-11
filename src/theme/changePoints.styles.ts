import { StyleSheet } from 'react-native'
import { Colors } from './colors'

export const changePointsScreenStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  instructionsText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: Colors.contentPrimary,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    marginHorizontal: 15,
  },
})
