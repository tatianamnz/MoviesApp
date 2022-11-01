import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationParams } from '../navigation/params'
import { StackNavigationProp } from '@react-navigation/stack'
import { CarouselBottom } from '../components/CarouselBottom'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalSlider } from '../components/HorizontalSlider'

const { width: windowWidth } = Dimensions.get('window')

type HomeScreenProps = StackNavigationProp<NavigationParams, 'HomeScreen'>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>()

  const goToDetails = () => {
    navigation.navigate('DetailScreen')
  }

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/*<MoviePoster movie={cinemaMovies[9]} />*/}
        {/*<Button title="Ir detalle" onPress={goToDetails} />*/}

        {/* CAROUSEL PRINCIPAL*/}
        <View
          style={{
            height: 440
          }}>
          <CarouselBottom windowWidth={windowWidth} movies={nowPlaying} />
        </View>
        {/* PELÍCULAS POPILARES */}
        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  )
}
