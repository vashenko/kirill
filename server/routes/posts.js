const express = require("express")
const router = express.Router()
const sql = require("../services/sql-queries/posts-queries")

router.get("/", (req, res) => {
  sql.postsQueries
    .getAllPosts()
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      return res.status(404).send("Oops something goes wrong")
    })
})

module.exports = router
