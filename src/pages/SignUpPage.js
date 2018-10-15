import React, { Component } from 'react'
import Form from '../components/Form'

class SignUpPage extends Component {
    render() {
        return (
            <h1>Create an account</h1>
            <Form
                signUp
                path="sign-up"
                handleSubmit={this.props.handleSubmit}
                error={this.props.error}/>
        )
    }
}

export default SignUpPage
