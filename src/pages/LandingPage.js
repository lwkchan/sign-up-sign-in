import React, { Component } from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const StyledLink = styled(Link)`
`

class LandingPage extends Component {
    render () {
      return (
      <div>
        <header className="App-header">
          <h1>Welcome to flatfair</h1>
        </header>
          <h2>Got an account already? <StyledLink to="sign-in">Go to sign in</StyledLink></h2>
          <h2>Don't have an account yet? <StyledLink to="sign-up" >Go to sign up</StyledLink></h2>
      </div>
    )
}
}

export default LandingPage
