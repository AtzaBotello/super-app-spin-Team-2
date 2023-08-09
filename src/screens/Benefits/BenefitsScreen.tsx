import React from 'react';
import {Image, StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import {Banner, StackedCardGrid, Text} from '@femsa-core';
import {BenefitInfoCard} from 'src/components/BenefitInfoCard';

interface StackedCardProps {
  title: string;
  icon: JSX.Element;
  onPress?: () => void;
  titlesSize?: string;
}

const historial = require('../../images/checkHistory.png');
const changePoints = require('../../images/changePoints.png');

const spinnerBanner = require('../../images/Banner1.png');

export const BenefitsScreen = () => {
  const data: StackedCardProps[] = [
    {
      title: 'Consulta tu historial',
      icon: <Image source={historial} />,
      onPress: () => console.log('hello word'),
    },
    {
      title: 'Cambiá tus puntos',
      icon: <Image source={changePoints} />,
      onPress: () => console.log('hello word'),
    },
  ];

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
  ];

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <View>
              <Text variant="content-one-semibold">Tienes</Text>
              <Text variant="title-one-semibold">10,657 puntos</Text>
              <View style={styles.pointConversionContainer}>
                <Text variant="small-body-bold" style={styles.pointConversion}>
                  Valen $10657
                </Text>
              </View>
            </View>
            <View>
              <Image
                source={require('../../images/blueRibbon.png')}
                style={styles.smallImage}
              />
            </View>
          </View>
        </View>

        <View>
          <StackedCardGrid
            data={data}
            titlesSize="default"
            numberOfColumns={2}
          />
        </View>

        <BenefitInfoCard
          title={'Acumula Productos'}
          text={
            'Muy pronto podras sumar tus compras y ganar productos de regalo'
          }
          image={require('../../images/startube.png')}
        />

        <BenefitInfoCard
          title={'Gana más puntos'}
          text={
            'Muy pronto podras sumar tus compras y ganar productos de regalo'
          }
          image={require('../../images/star.png')}
        />

        <BenefitInfoCard
          title={'Suma al comprar'}
          text={
            'Muy pronto podras sumar tus compras y ganar productos de regalo'
          }
          image={require('../../images/OrageRibbon.png')}
        />

        <Banner
          banners={banners}
          loading={false}
          onPress={() => console.log('banner press')}
          movingTime={2000}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 18,
  },
  row: {
    flexDirection: 'row',
  },
  pointConversionContainer: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
  pointConversion: {
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
    alignSelf: 'center',
  },
  smallImage: {
    width: 120,
    height: 120,
    marginBottom: 12,
    alignSelf: 'center',
  },
});
