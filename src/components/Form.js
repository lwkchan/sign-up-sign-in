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
	background-color: #fff;
	border: 1px solid #4195fc;
	border-radius: 10px;
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	cursor: pointer;
	display: inline-block;
	font-size: 20px;
	font-weight: bold;
	height: 60px
	margin: 0 auto;
	outline: 0;
	overflow: hidden;
	transform: perspective(1px) translateZ(0);
	transition-property: color;
	transition-duration: 0.3s;
	width: 50%;
	&:before{
		content: '';
		z-index: -1;
		background-color: #4195fc;
		border-radius: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transform: scale(0);
		transition-property: transform;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}
	&:hover{
		color: white;
	}
	&:hover&:before{
		transform: scale(2);
	}
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

