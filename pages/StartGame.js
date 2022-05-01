import React from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import color from '../color'
import Card from '../components/Card'
const StartGame = () => {
  return (
    <View style={styles.screen}>
      {/* <Text>Guess a Number</Text> */}
      <Text style={styles.title}>Start a New Game</Text>

      <Card style={styles.card}>
        <View>
          <Text>Enter a Number</Text>
          {/* <View style={styles.inputContainer}> */}
          <TextInput />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Reset' color={color.primary} />
            </View>
            <View style={styles.button}>
              <Button title='Confirm' />
            </View>
          </View>
        </View>
        {/* </View> */}
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
  },
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
  },
})
export default StartGame
