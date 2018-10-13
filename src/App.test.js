import App from './App'
import React from 'react'
import { render, fireEvent, waitForElement } from 'react-testing-library'

describe('App', () => {
    describe('When I first visit the homepage', () => {
        it('Shows me what site I am on', () => {
            const { getByText } = render(<App/>),
            welcomeText = getByText('Welcome to flatfair')

            expect(welcomeText).toBeDefined()
        })
        it('Has a form I can fill in for a new account', async () => {
            const { getByLabelText, getByText, getByTestId } = render(<App/>),
            emailInput = getByLabelText('E-mail'),
            passwordInput = getByLabelText('Password'),
            secondPasswordInput = getByLabelText('Re-enter Password')

            fireEvent.change(emailInput, {
                target: { value: 'test@email.com' }
            })
            fireEvent.change(passwordInput, {
                target: { value: 'password123' }
            })
            fireEvent.change(secondPasswordInput, {
                target: { value: 'password123' }
            })

            fireEvent.click(getByText('Submit'))

            const accountDashboard = await waitForElement(() => getByTestId('account-dashboard'))

            expect(accountDashboard.innerHTML).toContain('test@email.com')
        })
    })
})
