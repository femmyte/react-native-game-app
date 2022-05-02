import React from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import color from '../color'
import Card from '../components/Card'
import Input from '../components/Input'
const StartGame = () => {
  return (
    <View style={styles.screen}>
      {/* <Text>Guess a Number</Text> */}
      <Text style={styles.title}>Start a New Game</Text>

      <Card style={styles.card}>
        <Text>Enter a Number</Text>
        <Input style={styles.input} keyboardType='numeric' maxLength={2} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' color='#c717fc' />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' color={color.primary} />
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
  input: {
    width: 50,
  },
})
export default StartGame
