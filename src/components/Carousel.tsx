import { View } from 'react-native'
import { MoviePoster } from './MoviePoster'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'

interface Props {
  movieNowPlaying: Movie
  windowWidth: number
}

export const Carousel = ({ movieNowPlaying, windowWidth }: Props) => {
  return (
    <View
      style={{
        height: 440
      }}>
      <Carousel
        data={movieNowPlaying}
        renderItem={({ item }: any) => <MoviePoster movie={item} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
      />
    </View>
  )
}
