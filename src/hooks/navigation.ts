import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppStackParamList } from '@src/types'

export const useAppNavigation =
  (): NativeStackNavigationProp<AppStackParamList> => {
    const navigation =
      useNavigation<NativeStackNavigationProp<AppStackParamList>>()

    return { ...navigation }
  }
