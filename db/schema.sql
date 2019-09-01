CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE clients (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  phone varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE soups
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE vegan_rolls
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE drinks
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE salads
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE tables
(
    id int NOT NULL AUTO_INCREMENT,
    number int NOT NULL,
    is_booked BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);