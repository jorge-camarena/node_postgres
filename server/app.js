const express = require('express');
const app = express()

const createAccount = require('./DB/create_account')
const getAccount = require('./DB/get_account')
const connection = require('./DB/connection')

//process.env
PORT = process.env.PORT || 8000

//Initializing all middleware
app.use(express.json())

//GET ROUTES
app.get("/api/get-account", async (req, res) => {
    const account = await getAccount(client, req.query);
    res.send({
        account: account,
        message: `Successfully retrieved account with the name of ${req.query.name}`
    })
})

//POST ROUTES
app.put("/api/create-account", async (req, res) => {
    const account = await createAccount(client, req.body)
    res.send({
        account: account,
        message: "Account successfully created and stored in DB"
    })
})

//Connecting to Postgres DB
client = connection()
client.connect()


//Setting up Server Port
app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})