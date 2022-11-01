import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface'

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [cinemaMovies, setCinemaMovies] = useState<Movie[]>([])

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
    setCinemaMovies(resp.data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return {
    cinemaMovies,
    isLoading
  }
}
