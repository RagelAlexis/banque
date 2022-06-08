import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomNavigation, Text } from 'react-native-paper';

import UserComponent from '../components/UserComponent';
import VirementsPage from '../screens/VirementsPage';
import PlusPage from '../screens/PlusPage'

const Stack = createNativeStackNavigator()

const CompteRoute = () => <UserComponent />;

const VirementsRoute = () => <VirementsPage />;

const PlusRoute = () => <PlusPage />;;


const RouteNavigation = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'comptes', title: 'Comptes', icon: 'currency-eur' },
      { key: 'virements', title: 'Virements', icon: 'swap-horizontal' },
      { key: 'plus', title: 'Plus', icon: 'menu' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
        comptes: CompteRoute,
        virements: VirementsRoute,
        plus: PlusRoute,
    });


  return (

            <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: '#FFF' }}
            />
 
  )
}

export default RouteNavigation

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });