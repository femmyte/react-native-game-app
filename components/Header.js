import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import color from '../color'
const Header = ({ title }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.primary,
    paddingTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  title: {
    // marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
export default Header
