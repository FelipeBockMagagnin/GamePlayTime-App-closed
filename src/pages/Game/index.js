import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Game ({ route }) {
  const { gameID } = route.params

  return <View><Text>Game page {gameID}</Text></View>
}
