import React, { Component } from 'react'
import styled from 'styled-components'
import { Question } from 'styled-icons/octicons/Question'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;`,
Label = styled.label`
	flex-grow: 2;
`,
LabelText = styled.span`
	font-size: 20px;
	font-weight: bold;
`,
Entry = styled.div`
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
SubmitButton = styled.button`
	background: #4195fc;
	border-radius: 25px;
	box-shadow: ${props => props.error ? '0 0 2px #FA5858':''};
	font-size: 20px;
	height: 60px
	margin: 0 auto;
	outline: 0;
	width: 50%;
`,
ErrorMessage = styled.p`
	color: #FA5858;
	text-align: center;
`,
QuestionIcon = styled(Question)`
	color: #4195fc;
	height: 20px;
	margin: auto 20px;
`

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			confirmPassword: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.getModifierClassName = this.getModifierClassName.bind(this)
	}

	handleInputChange(event) {
		this.setState({ error: null })
		const { target } = event,
		{ value, name } = target
		this.setState({
			[name]: value
		})
	}

	getModifierClassName({ props }) {
		const elementBase = 'form__'
		if (props.signUp) {
			return `${elementBase}sign-up`
		}
		if (props.signIn) {
			return `${elementBase}sign-in`
		}

		return null
	}

	render() {
		return (
			<>
				<StyledForm
					className={`form ${this.getModifierClassName(this)}`}
					onSubmit={this.props.handleSubmit}>
					<Entry>
						<Label> <LabelText>Email</LabelText>
							<Input
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.handleInputChange} />
						</Label>
						<Tippy
							content="Please enter a valid email address which has not been used on this site before"
							trigger="mouseenter focus"
							placement="right">
							<QuestionIcon/>
						</Tippy>
					</Entry>
					<Entry>
						<Label> <LabelText>Password</LabelText>
							<Input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleInputChange} />
						</Label>
						<Tippy
							content="Use a password with over eight characters and a mixture of letters and numbers."
							trigger="mouseenter focus"
							placement="right">
							<QuestionIcon/>
						</Tippy>
					</Entry>
					{this.props.signUp &&
						<Entry>
							<Label> <LabelText>Re-enter Password</LabelText>
							<Input
							type="password"
							name="confirmPassword"
							value={this.state.confirmPassword}
							onChange={this.handleInputChange} />
							</Label>
							<Tippy
								content="Rewrite your password here to confirm it is correct"
								trigger="mouseenter focus"
								placement="right">
								<QuestionIcon/>
							</Tippy>
						</Entry>
					}
					<SubmitButton error={this.props.error} name="Submit" type="submit" value="Submit">Submit</SubmitButton>
				</StyledForm>
				<ErrorMessage>{this.props.error.message}</ErrorMessage>
			</>
			)
		}
	}

	export default Form

