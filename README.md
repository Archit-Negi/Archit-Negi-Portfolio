# MERN Stack Full-Stack Developer Portfolio

A modern, professional full-stack developer portfolio web application built with the MERN stack. Features a dark glassmorphism theme, Framer Motion animations, and dynamic GitHub project fetching.

## Technologies Used
- Frontend: React (Vite), Tailwind CSS, Framer Motion
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)

## Architecture & Folders
- `/frontend` - Contains the React Vite client application. It connects to the backend API and GitHub API.
- `/backend` - Contains the Express server and MongoDB models. Provides an endpoint for handling Contact form submissions.

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed locally or MongoDB Atlas connection string

### Backend Setup
1. Open terminal and navigate to `/backend` (`cd backend`)
2. Run `npm install`
3. Edit `backend/.env`: Provide your own `MONGO_URI` if necessary. It defaults to `mongodb://127.0.0.1:27017/portfolio`.
4. Run the development server with `node server.js` (Server runs on http://localhost:5000)

### Frontend Setup
1. Open a new terminal and navigate to `/frontend` (`cd frontend`)
2. Run `npm install`
3. If necessary, you can configure your backend API URL in a `.env` file via `VITE_API_URL=http://localhost:5000`. It defaults to port 5000 in `Contact.jsx`.
4. Run the development server with `npm run dev`

## Configuration
To modify your personal data, open `frontend/src/config/data.js` and change the details. The application will dynamically reflect your changes!
