import * as actionTypes from './actionTypes'


export const addMovies = (movies) => {

    return {
        type: actionTypes.ADD_MOVIES,
        movies: movies
    }
}

export const populateMovies = () => {

    return (dispatch) => {
      // fetch the posts
  
      fetch("http://www.omdbapi.com/?s=punisher&apikey=c4496bfa")
      .then(response => response.json())
      .then((json) => {
          dispatch({type : actionTypes.ADD_MOVIES, movies : json.Search})
      })
    }
}

export const addMovieDetails = (movie) => {

    return {
        type: actionTypes.ADD_MOVIE_DETAILS,
        movieDetail: movie
    }
}

export const populateMovieDetails = () => {

    return (dispatch) => {
      // fetch the posts
  
      fetch("http://www.omdbapi.com/?i="+imdbID+"&apikey=c4496bfa")
      .then(response => response.json())
      .then((json) => {
          dispatch({type : actionTypes.ADD_MOVIE_DETAILS, movieDetail : json.Search})
      })
    }
}