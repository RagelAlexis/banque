import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView  } from 'react-native-safe-area-context';
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