import React, { Component } from 'react'
import Form from '../components/Form'

class SignUpPage extends Component {
    render() {
        return (
            <Form
                signUp
                path="sign-up"
                handleSubmit={this.props.handleSubmit}
                error={this.props.error}/>
        )
    }
}

export default SignUpPage
