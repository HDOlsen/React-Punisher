import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class Movie extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      movieDetail: {}
    }
  }

  componentDidMount() {

    this.props.onAddMovies()
}

  render() {

    let movies = this.props.movies

    let movieItems = movies.map((movie) => {
      return (
        <li key={movie.imdbID}></li>,
        <li>{movie.Title}</li>,
        <img src={movie.Poster} alt={movie.Title}></img>
      )
    })

    return (
      <div class="d-flex flex-row pt-1 justify-content-center font-weight-bold text-monospace red-text">
        <ul>
          {movieItems}
        </ul>
          <button class="btn btn-elegant btn-sm btn-block" onClick={() => this.props.onAddMovieDetail(this.state.movieDetail)}>Add Movie Details</button>
      </div>
    );
  }
}

  
  const mapDispatchToProps = (dispatch) => {
  
    return {
      onAddMovies : (movies) => dispatch(actionCreators.populateMovies(movies)),
      onAddMovieDetail : (movieDetail) => dispatch(actionCreators.populateMovieDetails(movieDetail))
    }
  }


export default connect(mapDispatchToProps)(Movie)
