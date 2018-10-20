import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { Question } from 'styled-icons/octicons/Question'

const Entry = posed.div({
	enter: { x: 0,
opacity: 1 },
	exit: { x: -50,
opacity: 0 },
	preEnterPose: { x: 50,
opacity: 0 }
}),
Label = styled.label`
	flex-grow: 2;
`,
LabelText = styled.span`
	font-size: 20px;
	font-weight: bold;
`,
PosedEntry = styled(Entry)`
	display: flex
`,
Input = styled.input`
	border: 1px solid #4195fc;
	border-radius: 5px;
	margin-bottom: 20px;
	min-height: 60px;
	font-size: 20px;
	width: 100%;
	:focus {
		outline: none;
		border-color: #01A9DB;
		box-shadow: 0 0 2px #01A9DB;
	}
`,
QuestionIcon = styled(Question)`
	color: #4195fc;
	height: 20px;
	margin: auto 20px;
`

class FormEntry extends Component {
    render() {
        return (
            <PosedEntry>
                <Label> <LabelText>{this.props.label}</LabelText>
                    <Input
                    type={this.props.password ? 'password':'text'}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleInputChange} />
                </Label>
                <Tippy
                    content={this.props.tooltipContent}
                    trigger="mouseenter focus"
                    placement="right">
                    <QuestionIcon/>
                </Tippy>
            </PosedEntry>
        )
    }
}

export default FormEntry
