import { StyleSheet } from 'react-native'
import { Colors } from './colors'

export const changePointsScreenStyles = StyleSheet.create({
  container: {
    margin: 15,
  },
  formContainer: {
    flex: 1,
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
