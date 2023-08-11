import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Text, Card, Button } from '@femsa-core'

export const HelpModal = () => {
  return (
    <View>
      <View style={styles.rowText}>
        <Text style={styles.valueTitle}>
          1. Copia tu certificado de regalo de Spin Premia
        </Text>
      </View>
      <View style={styles.rowText}>
        <Text style={styles.valueTitle}>
          2. Entra a la app o página web de Volaris
        </Text>
      </View>
      <View style={styles.rowText}>
        <Text style={styles.valueTitle}>
          3. Elige tu próximo destino y vuelos
        </Text>
      </View>
      <View style={styles.rowText}>
        <Text style={styles.valueTitle}>
          4. Antes de terminar tu compra, pega o escribe el certificado de
          regalo al elegir tu metodo de pago
        </Text>
      </View>

      <Card style={styles.box} shadowColor="gray">
        <Text variant="title-one-regular" style={styles.titleCard}>
          Paga con tu crédito electrónico Volaris
        </Text>
        <Text
          variant="small-body"
          style={{ fontSize: 10, lineHeight: 16, marginBottom: 10 }}
        >
          Paga tu tarifa base con tu crédito electrónico Volaris. Los Impuestos,
          productos ys ervicios adicionales deben de pagarse con una tarjeta de
          crédito o dpebito adicional
        </Text>

        <View style={[styles.row, { marginTop: 10 }]}>
          <TextInput
            style={styles.input}
            placeholder="Número de crédito..."
            placeholderTextColor="#868686"
            keyboardType="numeric"
          />
          <Button text="Activar" size="small" style={styles.activateBtn} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6EC',
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
  box: {
    width: '100%',
    height: 200, // cardHeight,
    padding: 15,
    borderRadius: 10,
  },
  titleCard: {
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E6E6EC',
    borderRadius: 5,
  },
  activateBtn: {
    backgroundColor: 'black',
    borderRadius: 5,
  },
})
