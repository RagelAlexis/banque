import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserNavigation from './UserNavigation'
import RouteNavigation from './RouteNavigation'

const Stack = createNativeStackNavigator()

const HomeNavigation = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="User" component={UserNavigation}/>
                <Stack.Screen name="Route" component={RouteNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default HomeNavigation