# Todo Application - Backend

This is the backend for the Full-Stack Todo Application, built with Node.js, Express, TypeScript, and Prisma.

## Features

-   RESTful API for managing todos
-   SQLite database via Prisma ORM
-   Request validation with Zod
-   Secure headers with Helmet and CORS configuration
-   Rate limiting to prevent abuse

## Prerequisites

-   Node.js (v18 or later)
-   npm

## Getting Started

### 1. Clone the repository

If you haven't already, clone the main project repository. This backend is located in the `Backend/` directory.

### 2. Install Dependencies

Navigate to the `Backend` directory and install the required packages.

```bash
cd Backend
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the `Backend` directory by copying the example:

```bash
cp .env.example .env
```

The default `.env` file is configured for local development:

```
NODE_ENV=development
PORT=3001
DATABASE_URL="file:./data/dev.db"
CORS_ORIGIN="http://localhost:5173"
```

### 4. Setup Database

Generate the Prisma client and apply database migrations. The SQLite database file will be automatically created in the `data/` directory.

```bash
npm run prisma:generate
npm run prisma:migrate
```

### 5. Running the Server

-   **Development:** To run the server with hot-reloading using `ts-node-dev`.

    ```bash
    npm run dev
    ```

-   **Production:** To build and run the compiled JavaScript.

    ```bash
    npm run build
    npm start
    ```

The server will be running at `http://localhost:3001`.

## API Endpoints

All endpoints are prefixed with `/api`.

### Todos (`/todos`)

-   `GET /todos`: Fetches all todo items.
-   `POST /todos`: Creates a new todo item.
    -   Body: `{ "title": "string" }`
-   `PUT /todos/:id`: Updates an existing todo item. Can be used to update the title or completion status.
    -   Body: `{ "title": "string" (optional), "completed": boolean (optional) }`
-   `DELETE /todos/:id`: Deletes a specific todo item.
-   `POST /todos/clear-completed`: Deletes all todos that are marked as completed.

## Docker

To run the backend service using Docker, use the `docker-compose.yaml` file in the root directory of the project.

```bash
# From the root directory
docker-compose up --build backend
```