import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationParams } from '../navigation/params'

type DetailScreenProps = StackNavigationProp<NavigationParams, 'DetailScreen'>

export const DetailScreen = () => {
  const navigation = useNavigation<DetailScreenProps>()

  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button title="Ir atrás" onPress={goBack} />
    </View>
  )
}
