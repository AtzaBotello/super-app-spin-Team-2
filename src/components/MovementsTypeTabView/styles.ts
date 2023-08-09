import { Colors } from '@theme/colors'
import { StyleSheet } from 'react-native'

export const movementsTypeTabBarStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  tabBarIndicator: {
    backgroundColor: Colors.primary,
    height: 5,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  tabBarText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  tabBarTextFocused: {
    fontFamily: 'Poppins-SemiBold',
  },
})
