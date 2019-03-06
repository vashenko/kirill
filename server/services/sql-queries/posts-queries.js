const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vlad242325",
  database: "social"
})

const postsQueries = {}

postsQueries.getAllPosts = function() {
  return new Promise(function(resolve, reject) {
    connection.query("SELECT * FROM social.posts", (error, result) => {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

module.exports = {
  postsQueries
}
