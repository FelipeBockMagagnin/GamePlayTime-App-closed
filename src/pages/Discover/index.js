import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import axios from 'axios'
import Constants from 'expo-constants'

export default function Discover () {
  const [games, setGames] = useState()

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games').then(games => {
      setGames(games.data.results)
    })
  }, [])

  if (games === undefined) {
    return <View><Text>Loading</Text></View>
  }

  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight + 20, paddingHorizontal: 10 }}>
      <FlatList
        data={games}
        keyExtractor={games => String(games.id)}
        numColumns={2}
        renderItem={({ item: games }) => (
          <View style={{
            flex: 1,
            padding: 8,
            margin: 5,
            borderRadius: 10,
            backgroundColor: '#FFF'
          }}>
            <Image
              style={{
                width: 'auto',
                height: 100
              }}
              source={{
                uri: games.background_image
              }} />
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{games.name}</Text>
          </View>
        )}
      />
    </View>
  )
}
