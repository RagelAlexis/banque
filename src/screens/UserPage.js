import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import UserComponent from '../components/UserComponent'


const customData = require('../datas/data.json')

const UserPage = () => {
  return (
    <ScrollView>
      {customData.map((item, index) => {
        return (
          <UserComponent item={item} key={index} />
        )
      })}
    </ScrollView>
  )
}

export default UserPage