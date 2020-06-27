import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Games from './pages/Games'

const Tab = createBottomTabNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Games} />
        <Tab.Screen name="Settings" component={Games} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
