import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
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
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Game</Text>
      <NumberContainer>
        <Text style={styles.number}>{currentGuess}</Text>
      </NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.btn}>
          <Button title='LOWER' color={color.primary} />
        </View>
        <View style={styles.btn}>
          <Button title='GREATER' color={color.secondary} />
        </View>
      </Card>
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
