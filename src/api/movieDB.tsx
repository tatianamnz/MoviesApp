import axios from 'axios'

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6e540eff1a6f378a7782f5f646933284',
    language: 'es-ES'
  }
})

export default movieDB
