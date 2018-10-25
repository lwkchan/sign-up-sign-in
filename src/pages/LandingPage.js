import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from '@reach/router'
import styled from 'styled-components'
import { Layout } from './Layout'
import { SignIn } from 'styled-icons/octicons/SignIn'
import { UserEdit } from 'styled-icons/fa-solid/UserEdit'

const StyledLink = styled(Link)`
  color: #4195fc;
  display: inline-block;
  transition: transform .3s ease-out;
  &:hover {
      text-decoration: none;
      transform: translateX(8px);
  }
`,
SignInIcon = styled(SignIn)`
  height: 20px;
  margin-left: 5px;
`,
SignUpIcon = styled(UserEdit)`
  height: 20px;
  margin-left: 5px;
`,
WelcomeHeader = styled.h1``,
CallToAction = styled.p`
  margin-bottom: 25px;
`

class LandingPage extends Component {
    render () {
      return (
      <Layout>
        <Helmet>
            <title>Welcome to flatfair</title>
        </Helmet>
        <WelcomeHeader>Welcome to flatfair</WelcomeHeader>
        <CallToAction>
          Don't have an account yet? <StyledLink to="sign-up" >Go to create an account<SignUpIcon/></StyledLink>
        </CallToAction>
        <CallToAction>
          Got an account already? <StyledLink to="sign-in">Go to sign in<SignInIcon/></StyledLink>
        </CallToAction>
      </Layout>
    )
}
}

export default LandingPage
