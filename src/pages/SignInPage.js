import React, { Component } from 'react'
import Form from '../components/Form'

class SignInPage extends Component {
    render() {
        return (
            <Form
                signIn
                path="sign-in"
                handleSubmit={this.props.handleSubmit}
                error={this.props.error}/>
        )
    }
}

export default SignInPage
