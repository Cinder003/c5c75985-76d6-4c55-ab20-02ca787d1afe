# Todo Application - Frontend

This is the frontend for the Full-Stack Todo Application, built with React, Vite, TypeScript, and TailwindCSS.

## Features

-   Modern, colorful, and responsive UI
-   Add, edit, complete, and delete todos
-   Clear all completed todos
-   State management with Zustand
-   API communication with Axios
-   Notifications with `react-hot-toast`

## Prerequisites

-   Node.js (v18 or later)
-   npm

## Getting Started

### 1. Clone the repository

If you haven't already, clone the main project repository. This frontend is located in the `Front-end/` directory.

### 2. Install Dependencies

Navigate to the `Front-end` directory and install the required packages.

```bash
cd Front-end
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the `Front-end` directory. It should contain the base URL for the backend API.

```
VITE_API_BASE_URL=http://localhost:3001/api
```

The backend server is expected to be running on port `3001`.

### 4. Running the Development Server

To start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 5. Building for Production

To create a production build of the application:

```bash
npm run build
```

The optimized static files will be generated in the `dist/` directory. You can preview the production build locally with:

```bash
npm run preview
```

## Docker

To run the frontend service using Docker, use the `docker-compose.yaml` file in the root directory of the project.

```bash
# From the root directory
docker-compose up --build frontend
```

This will build the React app and serve it using Nginx on port `5173`.