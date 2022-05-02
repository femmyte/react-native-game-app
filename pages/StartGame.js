import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import color from '../color'
import Card from '../components/Card'
import Input from '../components/Input'
const StartGame = () => {
  const [number, setNumber] = useState('')
  const handleChange = (inputNumber) => {
    setNumber(inputNumber.replace(/[^0-9]/g, ''))
    // setNumber(e.target.value)
  }
  console.log(number)
  const handleReset = () => {
    setNumber('')
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>

      <Card style={styles.card}>
        <Text>Enter a Number</Text>
        <Input
          style={styles.input}
          keyboardType='numeric'
          maxLength={2}
          onChangeText={handleChange}
          value={number}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' color='#c717fc' onPress={handleReset} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' color={color.primary} />
          </View>
        </View>
        <Text>{number}</Text>
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
