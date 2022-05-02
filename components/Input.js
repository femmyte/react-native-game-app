import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
const Input = (props, { style }) => {
  return (
    <View>
      <TextInput {...props} style={{ ...styles.input, ...style }} />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 30,
    marginVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
})
export default Input
