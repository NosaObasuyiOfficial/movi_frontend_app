/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useDispatch  } from 'react-redux';

export interface State {
  all_movies: any[];
  all_queries: any[];
  specific_movie: any[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  loading: false,
  all_movies: [],
  all_queries: [],
  specific_movie: [],
  error: null,
};

const dataSlice: any = createSlice({
  name: "registration",
  initialState,
  reducers: {
    fetchDataStart: (state, _action: PayloadAction<boolean>) => {
      state.loading = true;
      state.error = null;
    },
    fetchAllMovies: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.all_movies = action.payload;
    },
    fetchAlQueries: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.all_queries = action.payload;
    },
    fetchSpecificMovie: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.specific_movie = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchAllMovies, fetchAlQueries, fetchSpecificMovie, fetchDataFailure } =
  dataSlice.actions;

export default dataSlice.reducer;
