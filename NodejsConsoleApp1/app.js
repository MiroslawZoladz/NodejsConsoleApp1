'use strict';
var pg = require('pg');

const config = {
    host: 'mz-node-db.postgres.database.azure.com',
    user: 'miroslave@mz-node-db',
    password: 'Amelia12!',
    database: 'mypgsqldb',
    port: 5432,
    ssl: true
};
const db = new pg.Client(config);

db.connect(err => {
    if (err) console.log('DB connect failed');//throw err;
});

db.query("SELECT * FROM inventory", (err, dbRes) => {
    if (err) {
        console.log('Hello world');
    }
    else {
        console.log(dbRes);
    }
}
);

console.log('Hello world');
