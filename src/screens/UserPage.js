import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import UserComponent from '../components/UserComponent'


const customData = require('../datas/data.json')

const UserPage = () => {
  return (
    <View>
          <UserComponent/>
    </View>
  )
}

export default UserPage