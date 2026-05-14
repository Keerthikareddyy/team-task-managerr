const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const mysql = require("mysql2")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "authdb"
})

// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) return res.json({ error: err })
    res.json({ message: "User registered successfully 🚀" })
  })
})

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body

  const sql = "SELECT * FROM users WHERE email = ?"
  db.query(sql, [email], async (err, result) => {
    if (err) return res.json({ error: err })

    if (result.length === 0) {
      return res.json({ message: "User not found" })
    }

    const user = result[0]
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.json({ message: "Wrong password" })
    }

    res.json({ message: "Login successful 🚀", user })
  })
})

module.exports = router