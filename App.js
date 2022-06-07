import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import HomeNavigation from './src/navigations/HomeNavigation'

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <HomeNavigation />
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});