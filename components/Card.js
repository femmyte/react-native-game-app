import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Input from './Input'
const Card = ({ children, style }) => {
  return <View style={styles.card}>{children}</View>
}
const styles = StyleSheet.create({
  card: {
    // margin: 'auto',
    // alignItems: 'center',
    width: '80%',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
  },
})
export default Card
