# Secure Authentication & Threat Detection System

A backend service that provides secure user authentication, detailed logging of login activity, rate limiting, and rule-based threat detection. 

---

## 🚀 Features

### 🔐 Authentication
- User signup & login
- Password hashing (bcrypt/argon2)
- JWT access + refresh tokens
- Role-based authorization (user/admin)

### 🛡 Security & Logging
- Rate limiting (Redis)
- IP + User-Agent logging
- Persistent tracking of all login attempts
- Suspicious activity analysis

### 🚨 Threat Detection
Rule-based engine detects:
- Multiple failed logins from same IP
- Logins from unusual geographic locations
- Location jumps with logins
- Multiple users accessing from same IP

### 🧰 Admin Tools
- View all login attempts
- View generated threat alerts

---

## 📁 Project Structure
secure-auth-threat-detection/
  backend/
    src/
      controllers/ # Route handlers (auth, admin, alerts)
      middleware/ # Auth checks, rate limiting, logging
      services/ # Business logic (auth, tokens, detection)
      models/ # Database models (User, LoginAttempt, Alert)
      routes/ # Express route definitions
      app.ts # Express app config
      server.ts # Server entrypoint
      package.json
      tsconfig.json

## 🛠 Tech Stack

### Backend
- **Node.js** + **TypeScript**
- **Express.js**
- **PostgreSQL** (persistent storage)
- **Redis** (rate limiting & caching)
- **JWT** for auth tokens
- **bcrypt/argon2** for password hashing

### Dev Tools
- Docker
- Postman
