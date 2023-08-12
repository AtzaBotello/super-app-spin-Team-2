/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import { Image, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
import { Banner, StackedCardGrid } from '@femsa-core'
import { BenefitInfoCard } from '@components/BenefitInfoCard'
import { BenefitPointsCard } from '@components/BenefitPointsCard'
import { useAppNavigation } from '@src/hooks/navigation'
import { NavBar } from '@src/components'
import { useMovementsContext } from '@src/hooks/context'

interface StackedCardProps {
  title: string
  icon: JSX.Element
  onPress?: () => void
  titlesSize?: string
}

const historial = require('../../../assets/images/checkHistory.png')
const changePoints = require('../../../assets/images/changePoints.png')

const spinnerBanner = require('../../../assets/images/Banner1.png')

export const BenefitsScreen = () => {
  const { totalPoints } = useMovementsContext()
  const { navigate } = useAppNavigation()
  const data: StackedCardProps[] = [
    {
      title: 'Consulta tu historial',
      icon: <Image source={historial} />,
      onPress: () => navigate('MovementsScreen'),
    },
    {
      title: 'Cambiá tus puntos',
      icon: <Image source={changePoints} />,
      onPress: () => navigate('SelectBrandScreen'),
    },
  ]

  const banners = [
    {
      id: 1,
      title: 'Spinner Volaris',
      banner: {
        image: spinnerBanner,
        type: 'allied_link',
        url: 'www.volaris.com',
      },
    },
    {
      id: 2,
      title: 'Spinner Volaris',
      banner: {
        image: spinnerBanner,
        type: 'allied_link',
        url: 'www.volaris.com',
      },
    },
  ]

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <NavBar title="Beneficios" withGoBack={false} />

        <BenefitPointsCard points={totalPoints.toString()} />

        <View>
          <StackedCardGrid
            data={data}
            titlesSize="default"
            numberOfColumns={2}
            containerStyle={styles.stackedContainer}
          />
        </View>

        <BenefitInfoCard
          title={'Acumula Productos'}
          text={
            'Muy pronto podras sumar tus compras y ganar productos de regalo'
          }
          image={require('../../../assets/images/startube.png')}
        />

        <BenefitInfoCard
          title={'Gana más puntos'}
          text={
            'Muy pronto podras sumar tus compras y ganar productos de regalo'
          }
          image={require('../../../assets/images/star.png')}
        />

        <BenefitInfoCard
          title={'Suma al comprar'}
          text={
            'Muy pronto podras sumar tus compras y ganar productos de regalo'
          }
          image={require('../../../assets/images/OrageRibbon.png')}
        />

        <Banner
          banners={banners}
          loading={false}
          onPress={() => console.log('banner press')}
          movingTime={2000}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 18,
  },
  stackedContainer: {
    marginVertical: 40,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
    alignSelf: 'center',
  },
})
