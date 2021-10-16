import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/about"> About </Link></li>
          <li><Link to="/users/id"> Users </Link></li>
          <li><Link to="/strictAccess"> StrictAccess </Link></li>
        </ul>
        <h2>Home</h2>
        <p> My awesome Home component </p>
      </div>
    );
  }
}

export default Home;
