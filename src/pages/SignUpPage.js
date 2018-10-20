import React, { Component } from 'react'
import { UserEdit } from 'styled-icons/fa-solid/UserEdit'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Form from '../components/Form'
import { ArrowLeft } from 'styled-icons/feather/ArrowLeft'
import { Layout } from './Layout'

const SignUpIcon = styled(UserEdit)`
  height: 20px;
  margin: 5px;
`,
StyledLink = styled(Link)`
    color: #4195fc;
    &:hover {
        text-decoration: none;
    }
`,
BackArrowIcon = styled(ArrowLeft)`
    color: #4195fc;
    height: 20px;
    margin: 5px;
`

class SignUpPage extends Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>flatfair | Sign Up</title>
                </Helmet>
                <StyledLink to='/' >
                    <BackArrowIcon/>
                    Back
                </StyledLink>
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
