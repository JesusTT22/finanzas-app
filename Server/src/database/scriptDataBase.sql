CREATE DATABASE Finanzas;
USE Finanzas;

CREATE TABLE Login (
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (username, password)
);

INSERT INTO Login (username, password) VALUES
	('user1', '1234'),
    ('user2', '1234'),
    ('user3', '1234'),
    ('user4', '1234');