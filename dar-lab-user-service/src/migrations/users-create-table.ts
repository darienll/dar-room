import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: '217.182.72.53',
    user: 'daryn',
    password: 'Ya4icAKi',
    database: 'darynDB'
});

connection.connect();

// Create table

connection.query(`
    CREATE TABLE users (
        id int NOT NULL AUTO_INCREMENT,
        username varchar(255) NOT NULL,
        firstName varchar(255),
        lastName varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        PRIMARY KEY(id)
    )
`, (error, result) => {
    if (error) throw error;
    console.log('Result ', result);
})


connection.end();