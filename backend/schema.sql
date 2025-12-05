CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    permission TEXT DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS login_attempts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    email_entered TEXT NOT NULL,
    ip_address TEXT NOT NULL, 
    user_agent TEXT NOT NULL,
    success BOOLEAN NOT NULL,
    ts TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS alerts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    ip_address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    resolved BOOLEAN DEFAULT FALSE
);