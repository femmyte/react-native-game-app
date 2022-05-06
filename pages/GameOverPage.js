import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import color from '../color'
import Card from '../components/Card'
const GameOverPage = ({ onRefreshGame, round }) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.text}>Game Over</Text>
        <Text>You Played {round} times</Text>
      </Card>
      <View style={styles.button}>
        <Button
          title='Restart Game'
          onPress={onRefreshGame}
          color={color.primary}
        />
      </View>
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
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    width: 150,
  },
})

export default GameOverPage
