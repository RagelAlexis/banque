import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import HomeNavigation from './src/navigations/HomeNavigation'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeNavigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});