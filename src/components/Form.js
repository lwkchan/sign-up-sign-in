import React, { Component } from 'react'

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
			<form
			className={`form ${this.getModifierClassName(this)}`}
			onSubmit={this.props.handleSubmit}>
				<label> Email
					<input
					type="text"
					name="email"
					placeholder="Email"
					value={this.state.email}
					onChange={this.handleInputChange} />
				</label>
				<label> Password
					<input
					type="password"
					name="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.handleInputChange} />
				</label>
				{this.props.signUp &&
					<label> Re-enter Password
					<input
					type="password"
					name="confirmPassword"
					placeholder="Re-enter Password"
					value={this.state.confirmPassword}
					onChange={this.handleInputChange} />
					</label>
				}
				<button name="Submit" type="submit" value="Submit">Submit</button>
			</form>
			{this.props.error.message}
			</>
			)
		}
	}

	export default Form

