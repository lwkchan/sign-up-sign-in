import React, { Component } from 'react'
import AccountDashboard from '../components/AccountDashboard'

class AccountPage extends Component {
    render () {
      return (
            <AccountDashboard email={this.props.email}/>
        )
    }
}

export default AccountPage
