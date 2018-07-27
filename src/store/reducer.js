
import * as actionTypes from './actionTypes'

const initialState = {
    movies :[],
    movieDetail :{}
  }

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case actionTypes.ADD_MOVIES:
      return {
        ...state,
        movies : action.movies
      }
    case actionTypes.ADD_MOVIE_DETAILS:
      return {
        ...state,
        movieDetail : action.movieDetail
      }
  }

  return state
}

export default reducer