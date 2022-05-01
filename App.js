import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import StartGame from './pages/StartGame'
export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Guess a Number' />
      <StartGame />
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
