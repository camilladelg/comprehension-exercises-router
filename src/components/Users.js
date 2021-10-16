import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const {
      greetingMessage = 'Hi There',
      match: { params: { id }
    } } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p> { `${greetingMessage} User ${id}` }, this is awesome Users component</p>
        <Link to="/">Volte para a home</Link>
      </div>
    );
  }
};

export default Users;

