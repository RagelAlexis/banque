import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-paper'
import { Text, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import CustomButton from './CustomButton'
import { Picker } from '@react-native-picker/picker'

const UserComponent = (props) => {
  const navigation = useNavigation()
  const { item, index } = props

  const customData = require('../datas/data.json')
  const [user, setUser] = useState('')

  return (
    <View style={{ flex: 1 }}>
      <Picker
        selectedValue={user}
        onValueChange={(item, index) => {
          checkUser(item)
        }}
      >
        <Picker.Item label="Nom" value="" />

        {customData.map((item, index) =>
          <Picker.Item label={item.user} value={item.user} key={index} />
        )}
      </Picker>
    </View>
  )
}

export default UserComponent