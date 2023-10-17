import React,{useEffect} from 'react'
import MovieList from '../movielisting/MovieList'
import './Home.css'

import { useDispatch } from 'react-redux'
import { addMovies, featchasyncmovies, featchasyncshows } from '../../features/movies/movieSlice'
const Home = () => {
 
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(featchasyncmovies())
dispatch(featchasyncshows())
    },[dispatch])   
  return (
    <div>
      <div className='banner-img'>

      </div>
      <MovieList/>
    </div>
  )
}

export default Home
