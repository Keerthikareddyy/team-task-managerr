import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">

      <h1 className="text-5xl font-bold mb-4">
        Welcome {user?.name} 🚀
      </h1>

      <p className="text-xl mb-8">
        Full Stack Authentication System
      </p>

      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
      >
        Logout
      </button>

    </div>
  )
}