import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import color from '../color'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'
const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  let randNum = Math.floor(Math.random() * (max - min) + min)
  if (randNum === exclude) {
    // this will check if the random number is the same thing that the user enter and recall the function once again
    return generateRandomNumber(min, max, exclude)
  } else {
    return randNum
  }
}
const GamePage = ({ number }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, number)
  )
  const [predict, setPredict] = useState()
  const handleNextGuess = (direction) => {
    // checked if the computer guess is greater than the number entered by the player and the user chose greter it should alert game over
    if (
      (currentGuess > number && direction === 'greater') ||
      (currentGuess < number && direction === 'lower')
    ) {
      Alert.alert("Don't lie", 'you also know that what you choose is wrong', [
        { text: 'OOPS!', style: 'destructive' },
      ])
      setPredict('game over')
      return
    } else {
      setPredict('you won')
    }
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Game</Text>
      <NumberContainer>
        <Text style={styles.number}>{currentGuess}</Text>
      </NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.btn}>
          <Button
            title='LOWER'
            color={color.primary}
            onPress={handleNextGuess.bind(this, 'lower')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title='GREATER'
            color={color.secondary}
            onPress={handleNextGuess.bind(this, 'greater')}
          />
        </View>
      </Card>
      {predict && <Text>{predict}</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '80%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    width: 100,
  },
})
export default GamePage
