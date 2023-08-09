import React from 'react'
import { NavBar as FemsaNavBar, Text } from '@femsa-core'
import { useNavigation } from '@react-navigation/native'

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
    <FemsaNavBar variant={'default'} iconOnPress={onGoBackPress}>
      <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18 }}>
        {title}
      </Text>
    </FemsaNavBar>
  )
}

export default NavBar
