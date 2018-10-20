import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import { Layout } from './Layout'
import { SignIn } from 'styled-icons/octicons/SignIn'
import { Helmet } from 'react-helmet'
import BackButton from '../components/BackButton'

const SignInIcon = styled(SignIn)`
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
                <BackButton/>
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
