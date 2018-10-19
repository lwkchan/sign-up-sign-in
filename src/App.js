import React, { Component } from 'react'
import firebase from 'firebase'
import firebaseConfig from './utils/.firebase-config'
import AccountPage from './pages/AccountPage'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import { Router, navigate, Location } from '@reach/router'
import posed, { PoseGroup } from 'react-pose'

const RouteContainer = posed.div(
	{
		enter: { opacity: 1,
				y: 50,
				delay: 500 },
		exit: { opacity: 0,
				y: 0 }
	}),
PosedRouter = ({ children }) => (
	<Location>
	{({ location }) => (
		<PoseGroup>
			<RouteContainer key={location.key}>
				<Router location={location}>{children}</Router>
			</RouteContainer>
		</PoseGroup>
	)}
	</Location>
)

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
		this.getErrorMessage = this.getErrorMessage.bind(this)
	}

	componentDidMount () {
		firebase.initializeApp(firebaseConfig)
	}

	handleSignInSubmit (event) {
		event.preventDefault()
		const { elements } = event.target,
		email = elements.email.value,
		password = elements.password.value
		if (!email || !password) {
			this.setState({ error: { message: 'Please fill in both fields' } })
		} else {
			this.signInUser(email, password)
		}
	}

	signInUser(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => {
			this.setState({
				email,
				isLoggedIn: true,
				error: ''
			})
			navigate('account-dashboard')
		})
		.catch(error => {
			const message = this.getErrorMessage(error)
			this.setState({ error: { message } })
		})
	}

	getErrorMessage({ code }) {
		switch (code) {
			case 'auth/user-not-found':
				return 'This user does not exist in our records. Please try a different email or contact us if this is wrong'
			case 'auth/invalid-email':
				return 'Please enter a valid email address'
			case 'auth/email-already-in-use':
				return 'We already have the user in our records. Please try a different email or contact us if this is incorrect'
			default:
				return 'Something went wrong. Please try again'
		}
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
					isLoggedIn: true,
					error: ''
				})
				navigate('account-dashboard')
			})
			.catch(error => {
				const message = this.getErrorMessage(error)
				this.setState({ error: { message } })
		})
	}

		render() {
		return (
			<div className="app">
				<PosedRouter>
					<LandingPage
						path="/"
						error={this.state.error}
						/>
					<SignInPage
						path="sign-in"
						handleSubmit={this.handleSignInSubmit}
						error={this.state.error}/>
					<SignUpPage
						path="sign-up"
						handleSubmit={this.handleSignUpSubmit}
						error={this.state.error}/>
					<AccountPage
						path="account-dashboard"
						email={this.state.email}/>
				</PosedRouter>
			</div>
			)
		}
}

export default App
