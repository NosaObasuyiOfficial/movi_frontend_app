import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetAllMovies, apiLogin, apiSearchQueries, apiGetAllQueries, apiGetSpecificMovie  } from "./axios"

import {
    fetchDataFailure,
    fetchDataStart,
    fetchAllMovies,
    fetchAlQueries,
    fetchSpecificMovie
  } from "./reducers";


interface MOVIE_DETAILS {
    movie: string,
    page: number
}
interface MOVIE_DETAILS {
    movie: string,
    page: number
}

interface login_data{
  email:string
}

interface search_data{
  movie:string
}

  export const all_movies_searched = createAsyncThunk(
    "searched_movies",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (movie_details:MOVIE_DETAILS, { dispatch }: any) => {
      try {
        dispatch(fetchDataStart(true));

        const response = await apiGetAllMovies(`/?s=${movie_details.movie}&page=${movie_details.page}&apikey=3b6a8053`);

        dispatch(fetchAllMovies(response.data));
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        dispatch(fetchDataFailure(error.response.data.message));
  
      }
    }
  );

  export const specific_movie = createAsyncThunk(
    "specific_movies",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (movie_id:string, { dispatch }: any) => {
      try {
        dispatch(fetchDataStart(true));

        const response = await apiGetSpecificMovie(`/?i=${movie_id}&apikey=3b6a8053`);

        dispatch(fetchSpecificMovie(response.data));
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        dispatch(fetchDataFailure(error.response.data.message));
     
      }
    }
  );

  export const login_user = createAsyncThunk(
    "loginUser",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (login_form: login_data, { dispatch }: any) => {
      try {
        dispatch(fetchDataStart(true));
  
        const response = await apiLogin("/login", login_form);

        localStorage.setItem('token', response.data.user_token)
        localStorage.setItem('login_proceed', response.data.login_proceed);

          setTimeout(() => {
            window.location.href = "/movi/dashboard";
          }, 1000);
  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        //error check
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );

  export const search = createAsyncThunk(
    "searchQueries",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (search_query: search_data, { dispatch }: any) => {
      try {
        dispatch(fetchDataStart(true));
  
        const response = await apiSearchQueries("/search", search_query);

        localStorage.setItem('searched_movie', response.data.message)

  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        //error check
        dispatch(fetchDataFailure(error.response.data.message));
      }
    }
  );


  export const get_all_queries = createAsyncThunk(
    "get_queries",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_, { dispatch }: any) => {
      try {
        //set loader true
        dispatch(fetchDataStart(true));

        //axios call
        const response = await apiGetAllQueries("/queries");

        dispatch(fetchAlQueries(response.data.queries));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
      }
    }
  );
