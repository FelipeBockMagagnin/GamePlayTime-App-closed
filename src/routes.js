import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Games from './pages/Games'
import { Feather } from '@expo/vector-icons'
import Login from './pages/Login'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Game from './pages/Game'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={{ title: 'Login' }} component={Login} />
        <Stack.Screen name='Home' options={{ headerShown: false }} component={TabNavigator} />
        <Stack.Screen name='Game' component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
function TabNavigator () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          switch (route.name.toLowerCase()) {
            case 'games':
              iconName = 'layers'
              break

            case 'discover':
              iconName = 'search'
              break

            case 'profile':
              iconName = 'user'
              break
          }

          return <Feather name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name='Games' component={Games} />
      <Tab.Screen name='Discover' component={Discover} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}
