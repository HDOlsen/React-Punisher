import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

class MovieDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          movieDetail: {}
        }
      }


  render() {

    let movieItem = this.props.movieDetail.map((movie) => {
      return (
            <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
              <div>Year: {movie.Year}</div>
              <div>Rated: {movie.Rated}</div>
              <div>Released: {movie.Released}</div>
              <div>Director: {movie.Director}</div>
            </div>
          </li>
      )
    })

    return (
      <div id="">
        <h1>Movie Details</h1>
        <div id="">
          {movieItem}
        </div>
      </div>
    )
  }
}

export default connect(MovieDetails)