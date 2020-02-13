import mysql from 'mysql2';
import connection from './connection';

// const connection = mysql.createConnection({
//     host: '217.182.72.53',
//     user: 'daryn',
//     password: 'Ya4icAKi',
//     database: 'darynDB'
// });

connection.connect();

// Create table

connection.query(`
    CREATE TABLE tokens (
        id int NOT NULL AUTO_INCREMENT,
        token varchar(255) NOT NULL,
        user_id int NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
`, (error, result) => {
    if (error) throw error;
    console.log('Result ', result);
})


connection.end();