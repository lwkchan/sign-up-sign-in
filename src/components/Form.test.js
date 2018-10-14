import Form from './Form'
import React from 'react'
import { render, cleanup } from 'react-testing-library'

afterEach(cleanup)

describe('Form', () => {
    it('Has a email input', () => {
        const { queryAllByText } = render(<Form/>),
        emailInput = queryAllByText('E-mail')

        expect(emailInput).toHaveLength(1)
    })
    it('Has one password input', () => {
        const { queryAllByText } = render(<Form/>),
        passwordInput = queryAllByText('Password')

        expect(passwordInput).toHaveLength(1)
    })
    it('Has no confirm password input', () => {
        const { queryAllByText } = render(<Form/>),
        confirmPasswordInput = queryAllByText('Re-enter Password')
        
        expect(confirmPasswordInput).toHaveLength(0)
    })
    it('Has one confirm password input when the signUp prop is true', () => {
        const { queryAllByText } = render(<Form signUp/>),
        confirmPasswordInput = queryAllByText('Re-enter Password')

        expect(confirmPasswordInput).toHaveLength(1)
    })
    it('Has a submit button', () => {
        const { queryAllByText } = render(<Form/>),
        submitButtons = queryAllByText('Submit')

        expect(submitButtons).toHaveLength(1)
    })
});