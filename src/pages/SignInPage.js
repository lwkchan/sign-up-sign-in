import React, { Component } from 'react'
import Form from '../components/Form'

class SignInPage extends Component {
    render() {
        return (
            <Form
                signUp
                path="sign-in"
                handleSubmit={this.props.handleSignInSubmit}
                error={this.props.error}/>
        )
    }
}

export default SignInPage
