USE WAD_ASSIGNMENT;
CREATE TABLE users(
    username varchar(30),
    user_password varchar(30),
    CONSTRAINT PK_WAD_USERS PRIMARY KEY (username)
);

CREATE TABLE emails(
    username varchar(30),
    email varchar(30),
    salutation varchar(5),
    purpose varchar(20),
    subject varchar(30),
    message varchar(255),
    CONSTRAINT PK_WAD_EMAILS PRIMARY KEY (username, email),
    CONSTRAINT FK_WAD_EMAILS FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    email VARCHAR(191) NOT NULL,
    password VARCHAR (255) NOT NULl,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);