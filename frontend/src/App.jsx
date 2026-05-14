import { Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar"
import ProtectedRoute from "./components/ProtectedRoute"
 import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Signup from "./pages/signup"

export default function App() {

  return (
    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>

    </div>
  )
}