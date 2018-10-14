import React, { Component } from 'react';

class AccountDashboard extends Component {
	render(){
		return (
			<div data-testid='account-dashboard' >
			<p>Hello {this.props.email}</p>
			</div>
		)
	}
}

export default AccountDashboard