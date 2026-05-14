import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
        AuthApp 🚀
      </Link>

      <div className="flex items-center gap-6">

        {!user ? (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="font-medium text-gray-700">
              Hi, {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  )
}