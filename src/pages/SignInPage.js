import React, { Component } from 'react'
import Form from '../components/Form'

class SignInPage extends Component {
    render() {
        return (
            <h1>Sign In</h1>
            <Form
                signIn
                path="sign-in"
                handleSubmit={this.props.handleSubmit}
                error={this.props.error}/>
        )
    }
}

export default SignInPage
