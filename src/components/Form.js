import React, { Component } from 'react';

class Form extends Component {
    render() { 
        return (
            <div className="App">
              <header className="App-header">
                Welcome to flatfair
              </header>
              <form onSubmit={this.props.handleSubmit}>
                <label> E-mail
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.props.email}
                    onChange={this.props.handleInputChange} />
                </label>
                <label> Password
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.props.password}
                    onChange={this.props.handleInputChange} />
                </label>
                <label> Re-enter Password
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter Password"
                    value={this.props.confirmPassword}
                    onChange={this.props.handleInputChange} />
                </label>
                <button name="Submit" type="submit" value="Submit">Submit</button>
              </form>
            </div>
        );
    }
}

export default Form