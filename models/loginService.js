const pool = require('../connection');

module.exports.getUser = async (email) =>{
    const client = await pool.connect();
    try {
        const nguoidung = await client.query('SELECT * FROM "users"  WHERE "email"='  + '\'' + email + '\'');
        await client.release();
        return nguoidung;
    } 
    catch (error) {
        console.log(error);
    }
}