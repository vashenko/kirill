const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vlad242325",
  database: "social"
})

const usersQueries = {}

usersQueries.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    connection.query("SELECT * FROM social.users", (error, result) => {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

usersQueries.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    connection.query(
      `SELECT * FROM social.users WHERE id = ${id}`,
      (error, result) => {
        if (error) return reject(error)

        resolve(result)
      }
    )
  })
}

module.exports = {
  usersQueries
}
