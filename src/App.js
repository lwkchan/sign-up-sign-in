import React, { Component } from 'react'
import firebase from 'firebase'
import firebaseConfig from './utils/.firebase-config'
import AccountDashboard from './components/AccountDashboard'
import Form from './components/Form'
import LandingPage from './components/LandingPage'
import { Router, navigate } from '@reach/router'

class App extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			isLoggedIn: false,
			error: ''
		}
		this.handleSignInSubmit = this.handleSignInSubmit.bind(this)
		this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
		this.createNewUser = this.createNewUser.bind(this)
	}

	componentDidMount () {
		firebase.initializeApp(firebaseConfig)
	}

	handleSignInSubmit (event) {
		event.preventDefault()

		this.setState({ isLoggedIn: true })
	}

	handleSignUpSubmit (event) {
		event.preventDefault()
		const { elements } = event.target,
		email = elements.email.value,
		password = elements.password.value,
		confirmPassword = elements.confirmPassword.value
		if (password !== confirmPassword) {
			this.setState({ error: { message: 'Please make sure the password fields match' } })
		} else {
			this.createNewUser(email, password)
		}
	}

	createNewUser(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(() => {
					this.setState({
						email,
						isLoggedIn: true
					})
					navigate('account-dashboard')
				})
				.catch(error => {
					const { message } = error
					this.setState({ error: { message } })
		})
	}

	render() {
		return (
			<Router>
				<LandingPage path="/"/>
				<Form signIn
					path="sign-in"
					handleSubmit={this.handleSignInSubmit}
					error={this.state.error}/>
				<Form signUp
					path="sign-up"
					handleSubmit={this.handleSignUpSubmit}
					error={this.state.error}/>
				<AccountDashboard path="account-dashboard" email={this.state.email}/>
			</Router>
			)
		}
	}

	export default App
