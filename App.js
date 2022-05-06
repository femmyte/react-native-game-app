import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import StartGamePage from './pages/StartGame'
import GamePage from './pages/GamePage'
import GameOverPage from './pages/GameOverPage'
export default function App() {
  const [confirmedNumber, setConfirmedNumber] = useState()
  // const [startGame, setStartGame] = useState(false)
  const [gameRound, setGameRound] = useState(0)
  const handleStartGame = (gameNumber) => {
    setConfirmedNumber(gameNumber)
    setGameRound(0)
  }

  const handleGameOver = (roundNumber) => {
    setGameRound(roundNumber)
  }
  const handleReset = () => {
    setConfirmedNumber(0)
    setGameRound(0)
  }
  let content = <StartGamePage onStartGame={handleStartGame} />

  if (confirmedNumber && gameRound <= 0) {
    content = <GamePage number={confirmedNumber} onGameOver={handleGameOver} />
  } else if (gameRound > 0) {
    content = <GameOverPage onRefreshGame={handleReset} round={gameRound} />
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
