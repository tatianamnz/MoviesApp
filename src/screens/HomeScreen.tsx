import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationParams } from '../navigation/params'
import { StackNavigationProp } from '@react-navigation/stack'
import movieDB from '../api/movieDB'

type HomeScreenProps = StackNavigationProp<NavigationParams, 'HomeScreen'>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>()

  const goToDetails = () => {
    navigation.navigate('DetailScreen')
  }

  useEffect(() => {
    movieDB.get('/now_playing').then(resp => {
      console.log(resp.data)
    })
  }, [])

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Ir detalle" onPress={goToDetails} />
    </View>
  )
}
