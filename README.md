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
| POST auth/signup | None | Email (required), Password (required), First Name (Optional), Last Name (Optional) | user_id, email, first and last name |
| POST auth/login | None | Email (required), Password (required) | JWT token and user_id |
| GET auth/refresh | User/Admin | None | Refreshed JWT token |
| GET profile/me | User/Admin | None | user_id, email, full name |
| GET admin/logs | Admin | None | all login attempts for the last 24 hours |
| GET admin/alerts | Admin | None | all alerts for the last 24 hours |
| POST admin/change-permissions | Admin | user_id, permission | user_id, email, new permission |


# How to Run
1. Install Node.js + npm
   - Verify with ```node -v``` and ```npm -v```
2. Install [PostgreSQL](https://www.postgresql.org/download/)
   - Verify with ```psql --version```
3. Update PORT, DATABASE_URL, and JWT_SECRET in ```.env```
4. ```cd secure-auth-threat-detection/backend```
5. Create the DB in Postgre
   - ```psql -U postgres```
   - Inside the psql console, ```CREATE DATABASE authdb;```, then quit with ```\q```
   - ```psql -U postgres -d authdb -f schema.sql```
6. ```npm install``` to install all dependencies
7. ```npm run dev``` to run!
8. Check ```GET http://<ip-address>:<PORT>/``` to verify it is running.
