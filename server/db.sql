CREATE DATABASE fooddistribution;

CREATE TABLE supplier (
    supp_id SERIAL PRIMARY KEY,
    business_name VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(255),
    email VARCHAR(255),
    hashed_password VARCHAR(255)
);

INSERT INTO supplier (business_name, address, phone_number, email, hashed_password) VALUES('McDonalds', '5960 Greenville Ave, Dallas, TX 75206', '(214) 369-6256', 'McDonalds@gmail.com', '1234');

CREATE TABLE store(
    store_id SERIAL PRIMARY KEY,
    store_name VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(255)
);

INSERT INTO Store (store_name, address) VALUES ('walmart','15220 Montfort Dr, Dallas, TX 75248');

CREATE TABLE produce (
    InventoryID integer,
    InventoryType VARCHAR(255) NOT NULL,
    ProduceCost DECIMAL,
    SentDate VARCHAR(10) NOT NULL
);

INSERT INTO produce (InventoryID, InventoryType, ProduceCost,SentDate) VALUES (1,'vegetables', .5, '3-23-2024');

CREATE TABLE inventory (
    InventoryID integer,
    InventoryType VARCHAR(255) NOT NULL,
    volume integer,
    ReceivedDate VARCHAR(10) NOT NULL
);

INSERT INTO inventory (InventoryID, InventoryType, volume,receivedDate) VALUES (1,'vegetables', 60, '3-29-2024');