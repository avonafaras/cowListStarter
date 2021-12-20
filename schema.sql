DROP DATABASE IF EXISTS:

CREATE DATABASE cowslist;

USE cowslist;

CREATE TABLE cows (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  description VARCHAR(250)
);

INSERT INTO cows(name, description) VALUES ('Burenka', 'Dobraya');


