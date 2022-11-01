import React from 'react'
import { ActivityIndicator, Button, Dimensions, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationParams } from '../navigation/params'
import { StackNavigationProp } from '@react-navigation/stack'
import Carousel from 'react-native-snap-carousel'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width: windowWidth } = Dimensions.get('window')

type HomeScreenProps = StackNavigationProp<NavigationParams, 'HomeScreen'>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>()

  const goToDetails = () => {
    navigation.navigate('DetailScreen')
  }

  const { cinemaMovies, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()
  console.log(cinemaMovies[3]?.title)

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      {/*<MoviePoster movie={cinemaMovies[9]} />*/}
      {/*<Button title="Ir detalle" onPress={goToDetails} />*/}
      <View
        style={{
          height: 440
        }}>
        <Carousel
          data={cinemaMovies}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  )
}
