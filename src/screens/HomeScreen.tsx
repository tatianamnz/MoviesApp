import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationParams } from '../navigation/params'
import { StackNavigationProp } from '@react-navigation/stack'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying } from '../interfaces/movieInterface'

type HomeScreenProps = StackNavigationProp<NavigationParams, 'HomeScreen'>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>()

  const goToDetails = () => {
    navigation.navigate('DetailScreen')
  }

  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(resp => {
      console.log(resp.data.results[0].title)
    })
  }, [])

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Ir detalle" onPress={goToDetails} />
    </View>
  )
}
