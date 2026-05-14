const express = require("express")
const router = express.Router()

const mysql = require("mysql2")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "authdb"
})


// CREATE TASK
router.post("/add", (req, res) => {

  const { title, description, status } = req.body

  const sql =
    "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)"

  db.query(sql, [title, description, status], (err, result) => {

    if (err) {
      return res.json({ error: err })
    }

    res.json({
      message: "Task added successfully 🚀"
    })
  })
})


// GET ALL TASKS
router.get("/", (req, res) => {

  const sql = "SELECT * FROM tasks"

  db.query(sql, (err, result) => {

    if (err) {
      return res.json({ error: err })
    }

    res.json(result)
  })
})

module.exports = router