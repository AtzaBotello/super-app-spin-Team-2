import React, { useCallback, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Linking } from 'react-native'
import { NavBar, Text, BottomSheet, SnackBar } from '@femsa-core'
import { HelpModal } from '../../../components/HelpModal'
import { InfoCardWithIcon } from '../../../components/DetailMovementSection/InfoCardWithIcon'
import { formatDate } from '../../../utils/dates'
import { CardBtnActions } from '../../../components/DetailMovementSection/CardBtnActions'
import { DetailedInfoRow } from '../../../components/DetailMovementSection/DetailedInfoRow'
import { returnAllyUrl } from '../../../utils/alliesUrl'
const cardHeight = 200

interface DetailMovScreenProps {
  ally: string
  points: string
  transaction: string
}

export const DetailMovementScreen = ({
  ally = 'Volaris',
  points = '200',
  transaction = '5dced89c-2b6e-4a1c-a715-c19b0a51',
}: DetailMovScreenProps) => {
  const url = returnAllyUrl(ally)

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    }
  }, [url])

  const onHelpPress = () => {
    BottomSheet.show({
      title: '¿Como usar un certificado de regalo?',
      children: <HelpModal />,
      headerBackgroundColor: '#ffffff',
      bodyBackgroundColor: '#ffffff',
      contentStyle: {
        paddingHorizontal: 40,
      },
    })
  }

  const saveGiftPress = () => {
    console.log('save gift card')
  }

  useEffect(() => {
    setTimeout(() => {
      SnackBar.show({
        text: '¡Listo! Cambiaste tus puntos',
        variant: 'info',
        withIcon: false,
        duration: 3000,
      })
    }, 200)
  }, [])

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.navbarContainer}>
        <NavBar
          variant="default"
          title="Detalle del Movimiento"
          colorTitleStyle="white"
          chevronIconStyle={{ display: 'none' }}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.floatCard}>
          <InfoCardWithIcon icon={ally} title={ally} />
        </View>

        <View style={styles.infoPointsCard}>
          {ally === 'Volaris' && (
            <Text
              variant="text-link-default"
              style={styles.linkText}
              onPress={() => onHelpPress()}
            >
              ¿Como puedo usar mi certificado de regalo?
            </Text>
          )}

          <DetailedInfoRow title="Puntos cambiados" value={points} />
          <DetailedInfoRow
            title="Valen"
            value={`$ ${(Number(points) / 10).toFixed(2)}`}
          />
          <DetailedInfoRow title="Fecha" value={'03 de septiembre del 2023'} />
          <DetailedInfoRow
            title="Válido hasta el"
            value={formatDate(Date.now(), 'DD/MM/YYYY')}
          />
        </View>

        <View style={[styles.infoPointsCard, { paddingBottom: 20 }]}>
          <Text style={[styles.valueTitle, { marginBottom: 5 }]}>
            Número de transacción
          </Text>
          <Text style={styles.textCode}>{transaction}</Text>
        </View>

        <CardBtnActions useOnPress={handlePress} saveOnPress={saveGiftPress} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#087D6F',
  },
  navbarContainer: {
    height: cardHeight,
  },
  floatCard: {
    width: '100%',
    position: 'absolute',
    top: (cardHeight / 2) * -1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconLogo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: (cardHeight / 4) * -1,

    alignSelf: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
  titleCard: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
  },
  infoContainer: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: cardHeight / 2,
  },
  infoPointsCard: {
    paddingTop: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6EC',
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'center',
    textDecorationLine: 'none',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    marginTop: 10,
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#F5F5F7',
    borderRadius: 8,
    alignItems: 'center',
  },
  giftCode: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 2,
  },
  box: {
    width: '100%',
    height: cardHeight,
    padding: 10,
    borderRadius: 10,
  },
  rowInfo: {
    marginVertical: 10,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  textValue: {
    fontWeight: '600',
    fontSize: 16,
  },
  textCode: {
    color: '#69698B',
    fontSize: 16,
    fontWeight: '400',
  },
  btnContainer: {
    paddingVertical: 10,
  },
})
