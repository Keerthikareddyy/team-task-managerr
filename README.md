Team Task Manager 

A full-stack Team Task Manager web application built using React.js, Tailwind CSS, Node.js, Express.js, and MySQL.

Features

- User Signup & Login
- Protected Routes
- Dashboard UI
- Task Creation
- Task Status Tracking
- Logout Functionality
- Responsive Design
- MySQL Database Integration

 Tech Stack

Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

 Backend
- Node.js
- Express.js
- MySQL
- bcrypt
- CORS

---
 Installation & Setup

 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
Backend Setup
npm install
npm run dev
Database Setup

Create a MySQL database named:

CREATE DATABASE authdb;

Use the database:

USE authdb;

Create Users Table:

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

Create Tasks Table:

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  status VARCHAR(50)
);
Deployment

Frontend deployed using Vercel.

Live Application

https://team-task-managerr-chi.vercel.app

GitHub Repository

https://github.com/Keerthikareddyy/team-task-manager

Author

Keerthika Reddy 
