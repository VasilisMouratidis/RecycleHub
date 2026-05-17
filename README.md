# RecycleHub

RecycleHub is a full-stack web application for displaying recycling points on an interactive map and allowing users to report issues related to recycling locations. The project consists of a React/Vite frontend and a Node.js/Express backend connected to MongoDB.

## Features

- Interactive recycling map
- Recycling point data served from the backend
- Problem report form for users
- MongoDB database integration
- GeoJSON import support for recycling point data
- Separate frontend and backend structure

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- GeoJSON data handling

## Project Structure

```text
RecycleHub/
├── recyclehub-backend/
│   ├── controllers/
│   │   ├── problemReportsController.js
│   │   └── recyclingPointsController.js
│   ├── models/
│   │   ├── ProblemReport.js
│   │   └── RecyclingPoint.js
│   ├── routes/
│   │   ├── problemReports.js
│   │   └── recyclingPoints.js
│   ├── importGeojson.js
│   ├── index.js
│   ├── seed.js
│   ├── thesis-kadon-wgs84.geojson
│   ├── package.json
│   └── .env.example
│
├── recyclehub-frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── ProblemReportForm.jsx
│   │   ├── RecyclingMap.jsx
│   │   ├── Sidebar.jsx
│   │   ├── main.jsx
│   │   └── assets/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── RecycleHubLogo.png
└── README.md
```

## Getting Started

Follow the steps below to run the project locally.

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account or a local MongoDB database

## Installation

Clone the repository:

```bash
git clone https://github.com/VasilisMouratidis/RecycleHub.git
cd RecycleHub
```

Install backend dependencies:

```bash
cd recyclehub-backend
npm install
```

Install frontend dependencies:

```bash
cd ../recyclehub-frontend
npm install
```

## Environment Variables

Inside the `recyclehub-backend` folder, create a `.env` file.

Example:

```env
PORT=5000
MONGODB_URI=mongodb+srv://BillMour:Vas1l31os051099@cluster0.qrtrsch.mongodb.net/
```

> Important: Do not upload the `.env` file to GitHub. Use `.env.example` to show the required variables without exposing private credentials.

## Running the Project

Start the backend server:

```bash
cd recyclehub-backend
npm start
```

Start the frontend development server:

```bash
cd recyclehub-frontend
npm run dev
```

The frontend will usually run at:

```text
http://localhost:5173
```

The backend will usually run at:

```text
http://localhost:5000
```

## Database Setup

The backend uses MongoDB to store recycling points and problem reports.

If you want to import recycling point data from the included GeoJSON file, run the import or seed script from the backend folder, depending on the script configured in your project:

```bash
cd recyclehub-backend
node importGeojson.js
```

or:

```bash
node seed.js
```

## API Overview

The backend includes routes for:

- Recycling points
- Problem reports

Typical route files:

```text
routes/recyclingPoints.js
routes/problemReports.js
```

## Security Notes

Before pushing this project to GitHub:

- Do not commit `.env`
- Do not commit `node_modules`
- Keep database credentials private
- Add a `.env.example` file instead of sharing real credentials

Recommended `.gitignore`:

```gitignore
node_modules/
.env
.env.*
!.env.example
dist/
build/
*.log
.DS_Store
Thumbs.db
.vscode/
.idea/
```

## Future Improvements

- Add user authentication
- Add admin dashboard for managing reports
- Add filtering by recycling material type
- Add status tracking for submitted problem reports
- Improve map markers and UI responsiveness
- Add deployment configuration for frontend and backend

## License

This project is currently not licensed. You may add a license depending on how you want the project to be used.

## Author

Developed by Vasilis Mouratidis.
