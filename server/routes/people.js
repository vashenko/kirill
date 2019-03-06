const express = require("express")
const router = express.Router()
const sql = require("../services/sql-queries")

const port = process.env.PORT || 8000

router.get("/", (req, res) => {
  sql.queries
    .getAllUsers()
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      return res.status(404).send("Oops something goes wrong")
    })
})

router.get("/:id", function(req, res) {
  const { id } = req.params
  sql.queries
    .getUserById(id)
    .then(user => {
      res.send(user[0])
    })
    .catch(err => res.status(404).send("No user was found by matched id"))
})

router.put("/rating/:id", (req, res) => {
  // const user = findUserByParam(req.params.name)
  // if (!user) return res.status(404).send("No user was found by matched id")
  // user.rating++
  // res.send(user)
})

module.exports = router
