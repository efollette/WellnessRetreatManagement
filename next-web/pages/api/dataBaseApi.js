const { json, send, createError, run } = require('micro')
const fetch = require('isomorphic-unfetch')

const fetchAllGuests = async(req, res) => {
    console.log("Fetching all guests");

    const url = "http://localhost:5000/user/guests";
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '*'
            }
        })
        if (response.ok) {
            console.log("response from guest was ok");
            const data = await response.json();
            console.log(data);
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