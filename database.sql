CREATE DATABASE unidb;

CREATE TABLE campus(
    c_name PRIMARY KEY,
    c_image OBJECT,
    adrs VARCHAR(255),
    decr VARCHAR(255),
)

CREATE TABLE student(
    stu_id SERIAL PRIMARY KEY,
    c_name VARCHAR(255),
    f_name VARCHAR(255),
    l_name VARCHAR(255),
    email VARCHAR(255),
    s_image OBJECT,
    gpa FLOAT 
   
);