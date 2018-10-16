import React, { Component } from 'react'
import Form from '../components/Form'
import { Layout } from './Layout'

class SignInPage extends Component {
    render() {
        return (
            <Layout>
                <h1>Sign In</h1>
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
