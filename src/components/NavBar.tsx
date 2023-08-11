import React from 'react'
import { Text } from '@femsa-core'
import { useNavigation } from '@react-navigation/native'
import { LeftChevronIcon } from './atoms/Icons'
import { Colors } from '@src/theme/colors'
import { StatusBar, TouchableOpacity, View } from 'react-native'

type Props = {
  title: string
  withGoBack: boolean
}

const NavBar = ({ title, withGoBack }: Props) => {
  const { canGoBack, goBack } = useNavigation()
  const onGoBackPress = () => {
    if (!withGoBack) return

    if (canGoBack()) {
      goBack()
    }
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      {withGoBack && (
        <TouchableOpacity onPress={onGoBackPress}>
          <LeftChevronIcon
            fill={Colors.contentSecondary}
            height={20}
            width={20}
            style={{ marginRight: 10, bottom: 2 }}
          />
        </TouchableOpacity>
      )}
      <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20 }}>
        {title}
      </Text>
    </View>
  )
}

export default NavBar
