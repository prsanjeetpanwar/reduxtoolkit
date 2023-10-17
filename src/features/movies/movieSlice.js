import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from '../../common/api/Movieapi';
import { ApiKey } from '../../common/api/Movieapikey';

export const featchasyncmovies = createAsyncThunk("movies/featchasyncmovies", async () => {
  const movietext = 'stranger';

  const response = await Movieapi.get(`?apikey=${ApiKey}&s=${movietext}&type=movie`);

  return response.data;
});

export const featchasyncshows = createAsyncThunk("movies/featchasyncshows", async () => {
  const series = 'friends';

  const response = await Movieapi.get(`?apikey=${ApiKey}&s=${series}&type=series`);

  return response.data;
});
export const featchasyncmovieorshowdetails = createAsyncThunk("movies/featchasyncshows", async (id) => {

  
    const response = await Movieapi.get(`?apikey=${ApiKey}&i=${id}&Plot=full`);
  
    return response.data;
  });

const initialState = {
  movies: {},
  shows: {},
  slectedMovieorshow:{}
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [featchasyncmovies.pending]: () => {
      console.log("Movies Pending");
    },
    [featchasyncmovies.fulfilled]: (state, action) => {
      console.log("Movies Fulfilled");
      state.movies = action.payload;
    },
    [featchasyncmovies.rejected]: () => {
      console.log("Movies Rejected");
    },
    [featchasyncshows.fulfilled]: (state, {payload}) => {
      console.log("Shows Fulfilled");
   return {...state, show:payload}
    },
    
    [featchasyncmovieorshowdetails.fulfilled]: (state, {payload}) => {
      console.log("details Fulfilled");
      return {...state,slectedMovieorshow:payload}
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovies = (state) => state.movies.movies;
export const getAllDetails=(state)=>state.movies.slectedMovieorshow;
export default movieSlice.reducer;
