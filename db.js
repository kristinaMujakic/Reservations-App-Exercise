/** Database for lunchly */
const { Client } = require('pg');
const config = require('./config');

const { username, password, hostname, port } = config;

const connectionString = `postgres://${username}:${password}@${hostname}:${port}/lunchly`;

const db = new Client({
    connectionString: connectionString
});

db.connect()
    .then(() => {
        console.log('Connected to the PostgreSQL database');
    })
    .catch((error) => {
        //  throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string')
        console.error('Error connecting to the database:', error.message);
    });

module.exports = db;