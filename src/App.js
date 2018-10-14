import React, { Component } from 'react';
import firebase from 'firebase'
import firebaseConfig from './utils/.firebase-config'
import AccountDashboard from './components/AccountDashboard'
import Form from './components/Form'
import LandingPage from './components/LandingPage'
import { Router, navigate } from '@reach/router'

class App extends Component {
	constructor(){
		super()
		this.state = {
			email: '',
			isLoggedIn: false,
			error: ''
		}
		this.handleSignInSubmit = this.handleSignInSubmit.bind(this)
		this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
	}

	componentDidMount () {
		firebase.initializeApp(firebaseConfig);
	}

	handleSignInSubmit (event) {
		event.preventDefault();

		this.setState({isLoggedIn: true})
	}

	handleSignUpSubmit (event) {
		event.preventDefault();
		const elements = event.target.elements
		const  email = elements.email.value
		const  password = elements.password.value
		const  confirmPassword = elements.confirmPassword.value
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({
					email,
					isLoggedIn: true
				})
				navigate('account-dashboard')
			})
			.catch((error) => {
				console.log('error', error);
				const { code, message } = error
				this.setState({error: {code, message}})
			})
	}

	render() {
		return (
			<Router>
				<LandingPage path='/'/>
				<Form signIn path='sign-in' handleSubmit={this.handleSignInSubmit}/>
				<Form signUp path='sign-up' handleSubmit={this.handleSignUpSubmit}/>
				<AccountDashboard path='account-dashboard' email={this.state.email}/>
			</Router>
			)
		}
	}

	export default App;