var pg = require('pg')
var config = {
    user:'postgres',
    database: 'webjob_data',
    password: 'hovupham0311',
    host: 'localhost',
    port: 8888,
    max: 10,
    idleTimeoutMillis: 30000,
}
var pool = new pg.Pool(config);
module.exports = pool;