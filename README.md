# URL Shortener Application

This project is a URL shortener application consisting of a backend built with FastAPI and a frontend built with React. It allows users to shorten long URLs and access the original URLs via shortened links. For more detailed documentation see [design.md](docs/design.md).

## Demo

Watch the demo of the application:

![Demo](docs/resource/working_demo.webm)

## Prerequisites

- **Python 3.10 or higher** for the backend
- **Node.js 22.2 and npm 10.7.0** for the frontend

## Backend Setup and Installation

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment (Optional):**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install backend dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

5. **Initialize the database:**

   The database schema will be created when the application starts.

## Frontend Setup and Installation

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install frontend dependencies:**

   ```bash
   npm install
   ```

## Running the Application

### Backend

1. **Start the FastAPI backend server:**

   ```bash
   fastapi dev main.py
   ```

   The backend will run on `http://127.0.0.1:8000`.

### Frontend

1. **Start the React development server:**

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.


## Troubleshooting

-  Make sure you have Node.js and npm installed, and dependencies are properly installed. Check the browser console for more details.