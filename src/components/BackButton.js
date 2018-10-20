import React, { Component } from 'react'
import styled from 'styled-components'
import { ArrowLeft } from 'styled-icons/feather/ArrowLeft'
import { Link } from '@reach/router'

const StyledLink = styled(Link)`
    color: #4195fc;
    display: inline-block;
    transition: transform .3s ease-out;
    &:hover {
        text-decoration: none;
        transform: translateX(-8px);
    }
`,
BackArrowIcon = styled(ArrowLeft)`
    color: #4195fc;
    height: 20px;
    margin: 5px;
`

class BackButton extends Component {
    render() {
        return (
            <StyledLink to={this.props.to? this.props.to: '/'} >
                <BackArrowIcon/>
                    Back
            </StyledLink>
        )
    }
}

export default BackButton
