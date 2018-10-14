import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isLoggedIn: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
      <form
        className={this.props.signUp 
                    ? 'form__sign-up' : this.props.signIn
                    ? 'form__sign-in' : 'form'}
        onSubmit={this.props.handleSubmit}>
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
        {this.props.signUp &&
          <label> Re-enter Password
          <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter Password"
          value={this.state.confirmPassword}
          onChange={this.handleInputChange} />
          </label>
        }
        <button name="Submit" type="submit" value="Submit">Submit</button>
      </form>
      </>
      );
    }
  }
  
  export default Form