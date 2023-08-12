import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Card } from '@femsa-core'
import BrandIcon from '@components/BrandIcon'
import { ClipboardIcon } from '../atoms/Icons'

const cardHeight = 200

interface CardProps {
  icon: string
  title: string
  code?: string
}

export const InfoCardWithIcon = ({
  icon = 'Volaris',
  title = 'Volaris',
  code = '42738499092812000',
}: CardProps) => {
  return (
    <Card style={styles.box} shadowColor="gray">
      <BrandIcon brand={icon} iconProps={styles.iconLogo} />
      <Text variant="title-one-regular" style={styles.titleCard}>
        {title}
      </Text>
      <Text variant="small-body" style={{ fontSize: 15 }}>
        Toca el ícono para copiar el certificado de regalo o escríbelo desde la
        app o página web de Volaris
      </Text>

      <View style={[styles.row, styles.rowInput]}>
        <View>
          <Text variant="extra-small-body">Certificado de regalo</Text>
          <Text variant="extra-small-body" style={styles.giftCode}>
            {code}
          </Text>
        </View>

        <ClipboardIcon onPress={() => console.log('Copied to clipboard')} />
      </View>
    </Card>
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
