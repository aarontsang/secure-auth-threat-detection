# Secure Authentication & Threat Detection System

A backend service that provides secure user authentication, detailed logging of login activity, rate limiting, and rule-based threat detection. 

---

## Features

### Authentication
- User signup & login
- Password hashing (bcrypt/argon2)
- JWT access + refresh tokens
- Role-based authorization (user/admin)

### Security & Logging
- IP + User-Agent logging
- Persistent tracking of all login attempts
- Suspicious activity analysis

### Threat Detection
Rule-based engine detects:
- Multiple failed logins from same IP
- Logins from unusual geographic locations
- Location jumps with logins

### Admin Tools
- View all login attempts
- View generated threat alerts

### Backend
- **Node.js** + **TypeScript**
- **Express.js**
- **PostgreSQL** (persistent storage)
- **JWT** for auth tokens
- **bcrypt/argon2** for password hashing

### Dev Tools
- Postman


### APIs

| Route | Authorization | Payload | Returns |
| :------- | :------: | :-------: | :-------: |
| auth/signup | None | Email (required), Password (required), First Name (Optional), Last Name (Optional) | user_id, email, first and last name |
| auth/login | None | Email (required), Password (required) | JWT token and user_id |
| auth/refresh | User/Admin | Refreshed JWT token |
| profile/me | User/Admin | None | user_id, email, full name |
| admin/logs | Admin | None | all login attempts for the last 24 hours |
| admin/alerts | Admin | None | all alerts for the last 24 hours |
| admin/change-permissions | Admin | user_id, permission | user_id, email, new permission |
