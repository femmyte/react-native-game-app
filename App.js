import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import StartGamePage from './pages/StartGame'
import GamePage from './pages/GamePage'
export default function App() {
  const [confirmedNumber, setConfirmedNumber] = useState()
  // const [startGame, setStartGame] = useState(false)

  const handleStartGame = (gameNumber) => {
    setConfirmedNumber(gameNumber)
  }

  let content = <StartGamePage onStartGame={handleStartGame} />

  if (confirmedNumber) {
    content = <GamePage number={confirmedNumber} />
  }
  return (
    <View style={styles.container}>
      <Header title='Guess a Number' />
      {content}
      {/* <StatusBar style='auto' /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
