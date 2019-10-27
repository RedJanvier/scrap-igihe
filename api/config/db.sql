CREATE DATABASE igihe;

CREATE TABLE posts (
        id SERIAL NOT NULL PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        tags VARCHAR(50)[] NOT NULL,
        body VARCHAR(20480) NOT NULL UNIQUE,
        images VARCHAR(255)[],
        date VARCHAR(50) NOT NULL,
        front_image VARCHAR(255) NOT NULL,
        url VARCHAR(255) NOT NULL
    );