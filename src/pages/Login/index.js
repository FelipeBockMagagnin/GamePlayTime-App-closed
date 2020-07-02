import React from 'react'
import { Text, Button, View } from 'react-native'

export default function Login ({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <Button title='Logar Com Google' onPress={ () => navigation.navigate('Home') }/>
    </View>
  )
}
