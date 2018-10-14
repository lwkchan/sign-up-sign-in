import App from './App'
import React from 'react'
import { render, fireEvent, waitForElement } from 'react-testing-library'
import firebase from 'firebase'

describe('App', () => {
    let firebaseSpy
    beforeEach(() => {
        // Mock connection to firebase
        firebaseSpy = jest.spyOn(firebase, 'initializeApp').mockReturnValue(true)
    })
    it('initializes firebase when rendered', () => {
        render(<App/>)
        expect(firebaseSpy).toHaveBeenCalledTimes(1)
    })
    describe('When I first visit the homepage', () => {
        it('Shows me what site I am on', () => {
            const { getByText } = render(<App/>),
            welcomeText = getByText('Welcome to flatfair')

            expect(welcomeText).toBeDefined()
        })
        it('I can fill in a form to sign up', async () => {
            // Mock call to firebase
            const mockAuthInterface = {
                createUserWithEmailAndPassword: () => Promise.resolve()
            },
            signUpSpy = jest.spyOn(mockAuthInterface, 'createUserWithEmailAndPassword')
            jest.spyOn(firebase, 'auth').mockReturnValue(mockAuthInterface)

            const { getByLabelText, getByText, getByTestId } = render(<App/>)

            fireEvent.click(getByText('Go to sign up.'))
            await waitForElement(() => getByLabelText('Email'))
            fireEvent.change(getByLabelText('Email'), {
                target: { value: 'test@email.com' }
            })
            fireEvent.change(getByLabelText('Password'), {
                target: { value: 'password123' }
            })
            fireEvent.change(getByLabelText('Re-enter Password'), {
                target: { value: 'password123' }
            })

            fireEvent.click(getByText('Submit'))
            await waitForElement(() => getByTestId('account-dashboard'))

            expect(signUpSpy).toHaveBeenCalledTimes(1)
        })
    })
})
