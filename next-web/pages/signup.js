/**
 * Filename: signup.js
 * Author: Manav Vats
 * Description: Signup page
 * Date: May 13th, 2020
 */

import Layout from '../components/layout';
import Logo from '../components/logo'
import { Component } from 'react';
import fetch from 'isomorphic-unfetch'
import SignUp from '../components/signupForm'

class Login extends Component {

    static getInitialProps({ req }) {
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

        const apiUrl = process.browser ?
            `${protocol}://${window.location.host}/api/signUp.js` :
            `${protocol}://${req.headers.host}/api/signUp.js`

        return { apiUrl }
    }

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            cPassword: '',
            error: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if (event.target.id == 'username')
            this.setState({ username: event.target.value })
        else if (event.target.id == 'password')
            this.setState({ password: event.target.value })
        else if (event.target.id == 'cPassword')
            this.setState({ cPassword: event.target.value })
        else
            console.log("Error in adjusting login state.")
    }

    async handleSubmit(event) {
        event.preventDefault()
        const username = this.state.username
        const password = this.state.password
        const cPassword = this.state.cPassword
        const url = "http://localhost:5000/user/signUp"

        if (password != cPassword) {
            this.setState({
                error: "Passwords do not match! Please try again!"
            })
            console.log("Ex")
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '*'
                },
                body: JSON.stringify({ username, password })
            })
            if (response.ok) {
                console.log("response was ok")
                const data = await response.json();
                console.log(data)
            } else {
                console.log('Login failed.')
                let error = new Error(response.statusText)
                error.response = response
                return Promise.reject(error)
            }
        } catch (error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            )
            throw new Error(error)

        }
    }

    render() {
        return ( <
            Layout home >
            <
            Logo / >
            <
            SignUp handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit }
            error = { this.state.error }
            /> < /
            Layout >
        )
    }
}
export default Login