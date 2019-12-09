import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
        <nav >
          {/* home.js */}
          <a className="logo" href="/" >Campus Recuiremnt App </a>

          <ul className="navlinks">

            <Link to="/student">
            <li>student</li>
            </Link>

            <Link to="/company">
            <li>company</li>
            </Link>

            <Link to="/admin">
            <li>admin</li>
            </Link>

          </ul>
        </nav>
        )
  }
}
