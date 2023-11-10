async function getAccount(database, params) {
    const query = {
        text: "SELECT * FROM accounts WHERE account_name = $1",
        values: [params.name]
    }

    const res = await database.query(query)
    database.on('error', (error) => {
        console.log(error)
        return error
    })

    const account = res.rows[0]
    return account
}

module.exports = getAccount