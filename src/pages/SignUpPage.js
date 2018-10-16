import React, { Component } from 'react'
import Form from '../components/Form'
import { Layout } from './layouts'

class SignUpPage extends Component {
    render() {
        return (
            <Layout>
                <h1>Create an account</h1>
                <Form
                    signUp
                    path="sign-up"
                    handleSubmit={this.props.handleSubmit}
                    error={this.props.error}/>
            </Layout>
        )
    }
}

export default SignUpPage
