import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '@src/theme/colors'

const ListItemDivider = () => {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.outline,
  },
})

export default ListItemDivider
