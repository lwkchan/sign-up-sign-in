import React, { Component } from 'react';

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
    this.getForm = this.getForm.bind(this)
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


  getForm () {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to flatfair
        </header>
        <form onSubmit={this.handleSubmit}>
          <label> E-mail
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <label> Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange} />
          </label>
          <label> Re-enter Password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter Password"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange} />
          </label>
          <button name="Submit" type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }

  render() {
    return (
      this.state.isLoggedIn
      ? this.getAccountDashboard()
      : this.getForm()
    )
  }
}

export default App;