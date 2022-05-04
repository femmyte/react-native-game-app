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
    width: '60%',
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    fontSize: 25,
    color: color.secondary,
  },
})
export default NumberContainer
