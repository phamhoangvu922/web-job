const pool = require('../connection.js');
module.exports.getInfo = async (email) =>{
    const client = await pool.connect();
    try{
      const result = await client.query('SELECT * FROM "users"  WHERE "email"='  + '\'' + email +'\'');
      await client.release();
      return result;
    }
    catch(err)
    {
      console.log(err);
    }
}