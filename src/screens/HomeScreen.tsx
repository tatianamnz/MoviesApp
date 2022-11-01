import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationParams } from '../navigation/params'
import { StackNavigationProp } from '@react-navigation/stack'

type HomeScreenProps = StackNavigationProp<NavigationParams, 'HomeScreen'>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>()

  const goToDetails = () => {
    navigation.navigate('DetailScreen')
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Ir detalle" onPress={goToDetails} />
    </View>
  )
}
