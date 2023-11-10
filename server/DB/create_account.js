async function createAccount(database, params) {
    const query = {
        text: "INSERT INTO accounts(account_name, account_email, account_password, age) VALUES($1, $2, $3, $4) RETURNING *",
        values: [params.name, params.email, params.password, params.age]
    }
    const res = await database.query(query)
    database.on('error', (error) => {
        console.log(error)
        return error
    })
    const createdAccount = res.rows[0]
    return createdAccount
}

module.exports = createAccount