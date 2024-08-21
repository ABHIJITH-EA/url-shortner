# Design of URL Shortener Backend

## Overview

The URL Shortener application is designed to take a long URL, generate a unique shortened URL, and redirect users to the original URL when the shortened version is accessed. This document outlines the design decisions, implementation details, and architectural considerations for the backend of the application.

## Architecture

### Directory Structure

```
backend
    - api
      - __init__.py
      - routes.py
      - schema.py
    - app
      - __init__.py
      - main.py
    - databases
      - __init__.py
      - database.py
      - models.py
    - services
      - url_service.py
    - exceptions
      - __init__.py
      - exceptions.py
    requirements.txt
```

### Components

1. **API Layer (`api` directory)**
   - **`routes.py`**: Defines the API endpoints for shortening URLs and redirecting to the original URLs. It uses FastAPI’s routing system and dependency injection for database access.
   - **`schema.py`**: Contains Pydantic models for request and response validation. Ensures that the URLs follow the expected format and structure.

2. **Application Layer (`app` directory)**
   - **`main.py`**: Initializes the FastAPI application, sets up middleware, and includes the API router. Handles application startup and configuration.

3. **Database Layer (`databases` directory)**
   - **`database.py`**: Manages database connections and session handling. Utilizes SQLAlchemy for ORM.
   - **`models.py`**: Defines the database schema for the `ShortUrl` model. Uses SQLAlchemy for ORM mapping and ensures uniqueness of original URLs.

4. **Service Layer (`services` directory)**
   - **`url_service.py`**: Contains business logic for URL shortening and retrieval. Handles hashing and database operations.

5. **Exception Handling (`exceptions` directory)**
   - **`exceptions.py`**: Defines custom exceptions for more granular error handling, such as `DatabaseException` and `RecordNotFoundException`.

## Implementation Details

### URL Shortening Process

1. **Shortening a URL**:
   - **Request**: The client sends a POST request with the original URL.
   - **Processing**: The `url_shortner` function in `url_service.py` checks if the URL already exists in the database. If not, it generates a short hash, stores it, and returns the shortened URL.
   - **Response**: A shortened URL is returned in the response.

2. **Redirecting to Original URL**:
   - **Request**: The client sends a GET request with the shortened URL ID.
   - **Processing**: The `fetch_short_url` function retrieves the original URL from the database using the shortened URL ID.
   - **Response**: The server responds with a redirect to the original URL.

### Exception Handling

- Custom exceptions are used to provide clear error messages and handle specific error scenarios.
  - **`DatabaseException`**: Raised for database-related errors.
  - **`RecordNotFoundException`**: Raised when a requested record is not found.

### Configuration Management

- Environment variables are used for configuration to keep sensitive information and settings outside the codebase.
  - **`SQLALCHEMY_DATABASE_URL`**: Configured using environment variables to allow easy changes for different environments (development, testing, production).

### Database Initialization

- **Startup Event**: In a larger application, database initialization is typically handled in a startup event function to ensure that the database schema is created when the application starts.

### Code Maintainability and Scalability

- **Modular Structure**: The code is organized into modules based on functionality (API, services, models, exceptions), which makes it easier to maintain and extend.
- **Separation of Concerns**: Each module has a clear responsibility, which helps in isolating changes and debugging issues.
- **Custom Exceptions**: Custom exceptions provide specific error handling and improve code readability.
- **Configuration Management**: Using environment variables for configuration keeps the codebase flexible and secure.

## Future Considerations

- **Database Migrations**: Switch to production grade database systems like MySQL, PostgreSQL
- **Performance Optimization**: As the application scales, consider adding caching(eg: Redis)