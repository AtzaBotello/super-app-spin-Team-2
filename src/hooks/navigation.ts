import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MovementStackParamList } from '@src/types'

export const useMovementNavigation =
  (): NativeStackNavigationProp<MovementStackParamList> => {
    const navigation =
      useNavigation<NativeStackNavigationProp<MovementStackParamList>>()

    return { ...navigation }
  }
