CREATE DATABASE IF NOT EXISTS  WAD_ASSIGNMENT;

USE WAD_ASSIGNMENT;
CREATE TABLE IF NOT EXISTS users(
    username varchar(30),
    user_password varchar(30),
    CONSTRAINT PK_WAD_USERS PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS emails(
    username varchar(30),
    email varchar(30),
    salutation varchar(5),
    purpose varchar(20),
    subject varchar(30),
    message varchar(255),
    CONSTRAINT PK_WAD_EMAILS PRIMARY KEY (username, email),
    CONSTRAINT FK_WAD_EMAILS FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS users (
    user_id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR (20) NOT NULl,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);

CREATE TABLE IF NOT EXISTS games (
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    img_src VARCHAR(255),
    `desc` TEXT,
    rating VARCHAR(50),
    rating_num INT,
    release_date DATE,
    developer VARCHAR(255),
    publisher VARCHAR(255),
    price DECIMAL(10, 2)
);

CREATE TABLE IF NOT EXISTS purchases (
    purchase_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    purchase_date DATETIME,
    total_amount DECIMAL(10, 2),
    payment_method VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE purchase_items (
    purchase_item_id INT AUTO_INCREMENT PRIMARY KEY,
    purchase_id INT,
    game_id INT,
    FOREIGN KEY (purchase_id) REFERENCES Purchases(purchase_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);
