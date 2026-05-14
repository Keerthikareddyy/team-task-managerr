import { useState } from "react"

export default function Dashboard() {

  const [tasks, setTasks] = useState([])

  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("Pending")

  const handleAddTask = (e) => {
    e.preventDefault()

    const newTask = {
      id: Date.now(),
      title,
      status
    }

    setTasks([...tasks, newTask])

    setTitle("")
    setStatus("Pending")
  }

  return (
    <div className="min-h-screen bg-blue-100 p-8">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Team Task Dashboard 🚀
      </h1>

      {/* TASK FORM */}

      <form
        onSubmit={handleAddTask}
        className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto space-y-4"
      >

        <input
          type="text"
          placeholder="Enter Task"
          className="w-full border p-3 rounded-xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          className="w-full border p-3 rounded-xl"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
        >
          Add Task
        </button>

      </form>

      {/* TASKS */}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {tasks.map((task) => (

          <div
            key={task.id}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-bold text-blue-700">
              {task.title}
            </h2>

            <p className="mt-4">
              Status:
              <span className="ml-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {task.status}
              </span>
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}