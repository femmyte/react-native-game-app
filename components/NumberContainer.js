import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const NumberContainer = ({ children }) => {
  return <View style={styles.confirmTextContainer}>{children}</View>
}
const styles = StyleSheet.create({
  confirmTextContainer: {
    borderRadius: 20,
    borderColor: color.secondary,
    borderWidth: 2,
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default NumberContainer
