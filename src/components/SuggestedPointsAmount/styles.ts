import { Colors } from '@src/theme/colors'
import { StyleSheet } from 'react-native'

export const suggestedPointsAmountStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginVertical: 20,
    rowGap: 10,
  },
  suggestedItemContainer: {
    flexBasis: '50%',
  },
  sugguestedTouchable: {
    borderRadius: 8,
    paddingVertical: 15,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sugguestedTouchableText: {
    fontFamily: 'Poppins-SemiBold',
  },
  pointsText: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    fontSize: 14,
    color: Colors.contentTertiary,
  },
})
