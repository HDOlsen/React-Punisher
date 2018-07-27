import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
    <div class="menu">
      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/add-details'>Add Movie Details</Link></li>
      </ul>
    </div>
    )
  }
}
