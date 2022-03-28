import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { SuperHeroPowerstats } from '../screens/SuperHeroPowerstats'

const Stack = createNativeStackNavigator()
export function Routes() {
  return (
    <NavigationContainer 
      // headerMode='none'
    >
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SuperHeroPowerstats' component={SuperHeroPowerstats} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}