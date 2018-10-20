import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import FormEntry from './FormEntry'

const PosedForm = posed.form({
	enter: { staggerChildren: 300 }
  }),
StyledForm = styled(PosedForm)`
	display: flex;
	flex-direction: column;`,
SubmitButton = styled.button`
	background: #4195fc;
	border-radius: 25px;
	box-shadow: ${props => props.error ? '0 0 2px #FA5858' : ''};
	font-size: 20px;
	height: 60px
	margin: 0 auto;
	outline: 0;
	width: 50%;
`,
ErrorMessage = styled.p`
	color: #FA5858;
	text-align: center;
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
					<FormEntry
						label="Email"
						name="email"
						value={this.props.email}
						handleInputChange={this.handleInputChange}
						tooltipContent="Please enter a valid email address with '@' and a domain name e.g. 'example@flatfair.co.uk'"
					/>
					<FormEntry
						password
						label="Password"
						name="password"
						value={this.state.password}
						handleInputChange={this.handleInputChange}
						tooltipContent={this.props.signUp ? 'Use a password with over eight characters and a mixture of letters and numbers.'
						: 'Please enter the password you signed-up with'}
					/>
					{this.props.signUp &&
						<FormEntry
							password
							label="Re-enter Password"
							name="confirmPassword"
							value={this.state.confirmPassword}
							handleInputChange={this.handleInputChange}
							tooltipContent={'Rewrite your password here to confirm it is correct'}
						/>
					}
					<SubmitButton error={this.props.error} name="Submit" type="submit" value="Submit">Submit</SubmitButton>
				</StyledForm>
				<ErrorMessage>{this.props.error.message}</ErrorMessage>
			</>
		)
	}
}

	export default Form

