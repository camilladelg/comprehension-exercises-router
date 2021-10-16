import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        userName: '',
        passWord: '',
        alert1: false,
        clickButton: false,
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  handleChange({target}) {
    const { name, value } = target;
    this.setState({
        [name]: value,
    })
  }

  handleClick() {
    const { userName, passWord } = this.state;
    if( !(userName === 'joao' && passWord === '1234')) {
      alert('Access denied');
      this.setState({
        alert1: true,
        // alert1:false
      })
    } this.setState({
      clickButton: true,
      // clickButton:false,
    })
  }

  componentDidMount() {
    this.setState({
      alert1: false,
      clickButton:false,
    })
  }



  render() {
    const { userName, passWord, alert1, clickButton} = this.state;
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/users/:id" render={ (props) => <Users {...props} greetingMessage="Good Morning" />} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/strictAccess"
          render={ (props) => ( 
            <StrictAccess
              { ...props }
              user={ {userName, passWord, alert1, clickButton} }
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />
          )}
        />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
