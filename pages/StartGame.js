import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import color from '../color'
import Card from '../components/Card'
import Input from '../components/Input'
const StartGame = () => {
  const [number, setNumber] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [confirmedNumber, setConfirmedNumber] = useState()
  const handleChange = (inputNumber) => {
    setNumber(inputNumber.replace(/[^0-9]/g, ''))
  }
  const handleReset = () => {
    setNumber('')
    setConfirm(false)
  }
  const handleConfirm = () => {
    const chosenNumber = parseInt(number)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Input has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: handleReset }]
      )
      return
    }
    setConfirm(true)
    setConfirmedNumber(chosenNumber)
    setNumber('')
  }
  let confirmOutput
  if (confirm) {
    confirmOutput = <Text>{confirmedNumber}</Text>
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
            <Button
              title='Confirm'
              color={color.primary}
              onPress={handleConfirm}
            />
          </View>
        </View>
      </Card>
      {confirmOutput}
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
