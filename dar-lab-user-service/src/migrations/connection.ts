import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: '217.182.72.53',
    user: 'daryn',
    password: 'Ya4icAKi',
    database: 'darynDB'
});
export default connection;