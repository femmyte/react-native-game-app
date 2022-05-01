import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
const Input = () => {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
})
export default Input
