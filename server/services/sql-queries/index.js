const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vlad242325",
  database: "social"
})

const queries = {}

queries.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    connection.query("SELECT * FROM social.users", function(error, result) {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

queries.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    connection.query(`SELECT * FROM social.users WHERE id = ${id}`, function(
      error,
      result
    ) {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

module.exports = {
  queries
}
