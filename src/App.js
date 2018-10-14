import React, { Component } from 'react';
import Form from './components/Form'
import LandingPage from './components/LandingPage'
import { Router } from '@reach/router'

class App extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      isLoggedIn: false
    }
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this)
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
    this.getAccountDashboard = this.getAccountDashboard.bind(this)
  }

  handleSignInSubmit (event) {
    event.preventDefault();
    console.log(event)
    this.setState({isLoggedIn: true})
  }

  handleSignUpSubmit (event) {
    event.preventDefault();
    console.log(event)
    this.setState({isLoggedIn: true})
  }

  getAccountDashboard () {
    return (
      <div data-testid='account-dashboard' >
        <p>Hello {this.state.email}</p>
      </div>
    )
  }

  render() {
    return (
      <Router>
        <LandingPage path='/'/>
        <Form signIn path='sign-in' handleSubmit={this.handleSignInSubmit}/>
        <Form signUp path='sign-up' handleSubmit={this.handleSignUpSubmit}/>
      </Router>
    )
  }
}

export default App;