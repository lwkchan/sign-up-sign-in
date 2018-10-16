import React, { Component } from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import { Layout } from './Layout'
import { SignIn } from 'styled-icons/octicons/SignIn'
import { UserEdit } from 'styled-icons/fa-solid/UserEdit'

const StyledLink = styled(Link)`
  color: #4195fc;
  &:hover {
    text-decoration: none;
  }
`,
SignInIcon = styled(SignIn)`
  height: 20px;
  margin: 5px;
`,
SignUpIcon = styled(UserEdit)`
  height: 20px;
  margin: 5px;
`,
WelcomeHeader = styled.h1``,
CallToAction = styled.p``

class LandingPage extends Component {
    render () {
      return (
      <Layout>
        <WelcomeHeader>Welcome to flatfair</WelcomeHeader>
        <CallToAction>
          Got an account already? <StyledLink to="sign-in">Go to sign in<SignInIcon/></StyledLink>
        </CallToAction>
        <CallToAction>
          Don't have an account yet? <StyledLink to="sign-up" >Go to create an account<SignUpIcon/></StyledLink>
        </CallToAction>
      </Layout>
    )
}
}

export default LandingPage
