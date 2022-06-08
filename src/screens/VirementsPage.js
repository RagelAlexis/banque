import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AjoutDepense from '../components/DepenseFormComponent'
import AjoutRevenus from '../components/RevenuFormComponent'

const VirementsPage = () => {
  return (
    <ScrollView style={{flex:1}}>
      <AjoutDepense/>
      <AjoutRevenus/>
    </ScrollView>
  )
}

export default VirementsPage