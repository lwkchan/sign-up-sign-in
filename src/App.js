import React, { Component } from 'react';
import Form from './components/Form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isLoggedIn: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.getAccountDashboard = this.getAccountDashboard.bind(this)
  }

  handleSubmit () {
    this.setState({isLoggedIn: true})
  }

  getAccountDashboard () {
    return (
      <div data-testid='account-dashboard' >
        <p>Hello {this.state.email}</p>
      </div>
    )
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      this.state.isLoggedIn
      ? this.getAccountDashboard()
      : <Form 
          email={this.state.email}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
    )
  }
}

export default App;