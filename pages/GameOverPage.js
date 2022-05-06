import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import color from '../color'
import Card from '../components/Card'
const GameOverPage = () => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.text}>Game Over</Text>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  card: {
    width: '50%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default GameOverPage
