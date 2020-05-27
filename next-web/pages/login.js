/**
 * Filename: login.js
 * Author: Manav Vats
 * Description: Login page
 * Date: May 13th, 2020
 */

import Layout from '../components/layout';
import Logo from '../components/logo'
import { Component } from 'react';
//import { login } from '../utils/auth'
import fetch from 'isomorphic-unfetch'
import LoginForm from '../components/loginForm'

class Login extends Component {

    static getInitialProps({ req }) {
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

        const apiUrl = process.browser ?
            `${protocol}://${window.location.host}/api/login.js` :
            `${protocol}://${req.headers.host}/api/login.js`

        return { apiUrl }
    }

    constructor(props) {
        super(props)

        this.state = { 
            username: '', 
            password: '', 
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
        else
            console.log("Error in adjusting login state.")
    }

    async handleSubmit(event) {
        event.preventDefault()
        const username = this.state.username
        const password = this.state.password
        const url = "http://localhost:5000/user/verify"

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
                console.log(response)
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
        return ( 
            <Layout home>
                <Logo />  
                <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>
            </Layout>
        )
    }
}
export default Login