import { View } from 'react-native'
import { MoviePoster } from './MoviePoster'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import Carousel from 'react-native-snap-carousel'

interface Props {
  movies: Movie[]
  windowWidth: number
}

export const CarouselBottom = ({ movies, windowWidth }: Props) => {
  return (
    <View
      style={{
        height: 440
      }}>
      <Carousel
        data={movies}
        renderItem={({ item }: any) => <MoviePoster movie={item} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
        vertical={false}
      />
    </View>
  )
}
