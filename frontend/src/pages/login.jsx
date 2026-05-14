import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      )

      alert(res.data.message)

     if (res.data.message === "Login successful 🚀") {

  localStorage.setItem(
    "user",
    JSON.stringify(res.data.user)
  )

  navigate("/")
}

    } catch (error) {
      console.log(error)
      alert("Login failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-600 px-4">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          welcome back 👋
        </h1>

        <p className="text-center text-white/80 mb-8">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center text-white/80 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold text-white">
            Signup
          </Link>
        </p>

      </div>

    </div>
  )
}