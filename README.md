# ✅ Task Manager Application

> **Organize. Track. Accomplish.**

A full-stack Task Manager application built with Angular and Spring Boot. This application allows users to create, manage, and track tasks with different statuses.

---

## ✨ Features

- 🔐 User authentication with JWT
- ✏️ Create, view, update, and delete tasks
- 🔍 Filter tasks by status (To Do, In Progress, Done)
- 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Technology Stack

### Frontend
- 🅰️ Angular 17
- 📘 TypeScript
- 🎨 Modern CSS with Flexbox and Grid
- 🧭 Angular Router for navigation
- 🔄 Angular Services for state management
- 📐 Responsive design principles

### Backend
- 🍃 Spring Boot 3.2
- 🔒 Spring Security with JWT authentication
- 🗄️ Spring Data JPA
- 🐬 MySQL database
- 🌐 RESTful API architecture

---

## 📂 Project Structure

```
task-manager-app/
├── frontend/                 # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/         # Core functionality (auth, interceptors)
│   │   │   ├── features/     # Feature modules
│   │   │   │   ├── auth/     # Authentication components
│   │   │   │   └── tasks/    # Tasks components
│   │   │   ├── shared/       # Shared components, models
│   │   └── assets/
└── backend/                  # Spring Boot backend
    ├── src/
    │   ├── main/
    │   │   ├── java/com/example/backend/
    │   │   │   ├── config/       # Configuration classes
    │   │   │   ├── controller/   # REST controllers
    │   │   │   ├── dto/          # Data Transfer Objects
    │   │   │   ├── exception/    # Custom exceptions
    │   │   │   ├── model/        # JPA entities
    │   │   │   ├── repository/   # JPA repositories
    │   │   │   ├── security/     # Security configurations
    │   │   │   └── service/      # Business logic
    │   │   └── resources/        # Application properties, SQL scripts
```

---

## 🚀 Getting Started

### Prerequisites
- ☕ Java 17 or higher
- 📦 Node.js 18 or higher
- 🐬 MySQL 8.0 or higher

### Backend Setup
1. Clone the repository
2. Navigate to the backend directory
3. Configure the database connection in `src/main/resources/application.properties`
4. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   npm start
   ```
4. Access the application at `http://localhost:4200`

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token

### Tasks
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{id}` - Get task by ID
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Update an existing task
- `DELETE /api/tasks/{id}` - Delete a task

---

## 🔒 Security

The application implements JWT-based authentication. After successful login, a token is provided that must be included in the Authorization header for subsequent requests to protected endpoints.

---

## 💾 Database Schema

### Users Table
- id (Long, PK)
- username (String, unique)
- password (String, encoded)

### Tasks Table
- id (Long, PK)
- title (String)
- description (String)
- status (Enum: TO_DO, IN_PROGRESS, DONE)
- createdAt (LocalDateTime)
- user_id (Long, FK)

---

## 🙏 Acknowledgments

- Built as part of the Treinetic Intern Full-Stack Engineer assignment
- Icons from Heroicons
- Font from Google Fonts (Inter)