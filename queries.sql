CREATE TABLE products (
  id              SERIAL PRIMARY KEY,
  name            VARCHAR(30) NOT NULL,
  code            CHAR(3) NOT NULL,
  price           FLOAT NOT NULL,
  type_id         INT NULL
);

INSERT INTO products(name, code, price, type_id) values('Eggs', 'EGG', 11.40, 2);
