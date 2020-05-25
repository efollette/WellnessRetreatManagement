const { json, send, createError, run } = require('micro')
const fetch = require('isomorphic-unfetch')

const login = async (req, res) => {

  try {
    console.log("Validating User")
    /* Validate User with DB */
    send(res,200,{token: 'Yea its working'})
  } catch (error) {
    throw createError(error.statusCode, error.statusText)
  }
  console.log("im here")
  
}

module.exports = (req, res) => run(req, res, login);