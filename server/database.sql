CREATE DATABASE post_db;

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    author VARCHAR(30),
    title VARCHAR(255),
    body VARCHAR(255)
)