import { Movie } from '../interfaces/movieInterface'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'
import React from 'react'

interface Props {
  title?: string
  movies: Movie[]
}
export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginBottom: 5 }}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => <MoviePoster movie={item} height={200} width={140} />}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
