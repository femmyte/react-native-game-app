import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
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
      <Text>my game</Text>
      <Text>{currentGuess}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default GamePage
