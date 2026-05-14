import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password
        }
      )

      alert(res.data.message)

    } catch (error) {
      console.log(error)
      alert("Signup failed")
    }
  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-blue-600 px-4">

      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Create Account ✨
        </h1>

        <p className="text-center text-white/80 mb-8">
          Signup to get started
        </p>

        <form onSubmit={handleSignup} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-white text-pink-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition duration-300"
          >
            Signup
          </button>

        </form>

        <p className="text-center text-white/80 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-white">
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}