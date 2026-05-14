const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// AUTH ROUTES
const authRoutes = require("./routes/auth")

// TASK ROUTES
const taskRoutes = require("./routes/tasks")

// USE ROUTES
app.use("/api/auth", authRoutes)
app.use("/api/tasks", taskRoutes)

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend running 🚀")
})

// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000")
})