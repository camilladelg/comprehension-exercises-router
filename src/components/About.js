import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p> My awesome About component </p>
        <Link to="/">Volte para a home</Link>
      </div>
    );
  }
}

export default About;
