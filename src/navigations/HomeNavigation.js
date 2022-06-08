import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RouteNavigation from './RouteNavigation'
import UserComponent from '../components/UserComponent'

const Stack = createNativeStackNavigator()

const HomeNavigation = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Route" component={RouteNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default HomeNavigation