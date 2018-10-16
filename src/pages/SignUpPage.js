import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../components/Form'
import { Layout } from './Layout'
import { UserEdit } from 'styled-icons/fa-solid/UserEdit'

const SignUpIcon = styled(UserEdit)`
  height: 20px;
  margin: 5px;
`

class SignUpPage extends Component {
    render() {
        return (
            <Layout>
                <h1>Create account<SignUpIcon/></h1>
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
