import React, { Component } from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import { Layout } from './layouts'

const StyledLink = styled(Link)`
  color: #01A9DB;
  &:hover {
    text-decoration: none;
  }
`,
WelcomeHeader = styled.h1``,
CallToAction = styled.p``

class LandingPage extends Component {
    render () {
      return (
      <Layout>
        <WelcomeHeader>Welcome to flatfair</WelcomeHeader>
        <CallToAction>
          Got an account already? <StyledLink to="sign-in">Go to sign in</StyledLink>
        </CallToAction>
        <CallToAction>
          Don't have an account yet? <StyledLink to="sign-up" >Go to sign up</StyledLink>
        </CallToAction>
      </Layout>
    )
}
}

export default LandingPage
