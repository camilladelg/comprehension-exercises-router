import React from 'react';
import { Link, Redirect } from 'react-router-dom'


class StrictAccess extends React.Component {
  render() {
    const { user: {userName, passWord, alert1, clickButton}, handleChange, handleClick} = this.props;
    // const verifiedLogin = userName === 'joao' && passWord === '1234';
    return (
      <>
        <form>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
          />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              type="password"
              name="passWord"
              value={passWord}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleClick}>Entrar</button>
        </form>
        {alert1 && <Redirect to="/" /> }
        {clickButton  &&  <p>Welcome joao!</p>}
        <Link to="/">Volte para a home</Link>
      </>
    )
  }
}

export default StrictAccess;