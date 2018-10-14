import React, { Component } from 'react'
import { Link } from '@reach/router'

class LandingPage extends Component {
    render () {
      return (
      <div>
        <header className="App-header">
          <h1>Welcom to flatfair</h1>
        </header>
        <h2>Got an account already? <Link to="sign-in" >Go to sign in.</Link></h2>
        <h2>Don't have an account yet? <Link to="sign-up" >Go to sign up.</Link></h2>
      </div>
    ) 
}
}

export default LandingPage
