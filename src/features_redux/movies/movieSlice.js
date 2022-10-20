import { createSlice } from "@reduxjs/toolkit";

// a slice is just a kind o a reducer
const initialState = {
  movies: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    //first action
    addMovies: (state, action) => {
      // or instead of action, I can just just destructure like {payload}
      state.movies = action.payload; // here, we can modify directly states properties because of the use of immer library who handle immutability automatically , whithout immer , we would have used spread operator({...state,payload}) to copy before making any change
    },
  },
  //extraReducers: {},
});

// the following creates the action called movies

export const { addMovies } = movieSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: getAllmovies=`useSelector((state: RootState) => state.movies.movies)`
export const getAllMovies = (state) => state.movies.movies; //first "movies" is the name of the slice and the second "movies" come from the store
// the following export the reducer
export default movieSlice.reducer;
