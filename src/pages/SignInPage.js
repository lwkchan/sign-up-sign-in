import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import { Link } from '@reach/router'
import { Layout } from './Layout'
import { SignIn } from 'styled-icons/octicons/SignIn'
import { ArrowLeft } from 'styled-icons/feather/ArrowLeft'
import { Helmet } from 'react-helmet'

const SignInIcon = styled(SignIn)`
    height: 20px;
    margin: 5px;
`,
StyledLink = styled(Link)`
    color: #4195fc;
    display: inline-block;
    transition: transform .3s ease-out;
    &:hover {
        text-decoration: none;
        transform: translateX(-8px);
    }
`,
BackArrowIcon = styled(ArrowLeft)`
    color: #4195fc;
    height: 20px;
    margin: 5px;
`

class SignInPage extends Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>flatfair | Sign In</title>
                </Helmet>
                <StyledLink to='/' >
                    <BackArrowIcon/>
                    Back
                </StyledLink>
                <h1>Sign In<SignInIcon/></h1>
                <Form
                    signIn
                    path="sign-in"
                    handleSubmit={this.props.handleSubmit}
                    error={this.props.error}/>
            </Layout>
        )
    }
}

export default SignInPage
