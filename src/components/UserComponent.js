import React from 'react'
import { Card } from 'react-native-paper'
import { Text, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import CustomButton from './CustomButton'

const UserComponent = (props) => {
    const navigation = useNavigation()
    const {item, index} = props

  return (
    <Card key={index} mode="outlined" style={{ marginVertical: 10 }}>
        <Card.Title title={item.user} />
        <Card.Content
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
        >
        <CustomButton 
          color="crimson"
          text="Plus d'infos"
          icon="account"
          mode="contained"
          onPress={()=> navigation.navigate('Route')}
        />
        </Card.Content>
    </Card>
  )
}

export default UserComponent