import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import axios from 'axios'

export default function Game ({ route }) {
  const { gameID } = route.params

  const [game, setGame] = useState()

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games/' + gameID).then(gameData => {
      setGame(gameData.data)
    })
  }, [])

  if (game === undefined) {
    return <View><Text>Loading {gameID}</Text></View>
  }

  return (
    <View>
      <Image
        style={{
          width: 'auto',
          height: 100
        }}
        source={{
          uri: game.background_image
        }} />
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>{game.name}</Text>
      <Text style={{ textAlign: 'center' }}>{new Date(game.released).toLocaleDateString() } </Text>
      <Text>Playtime: {game.playtime}</Text>
      <Text>Score: {game.metacritic}</Text>
    </View>
  )
}
