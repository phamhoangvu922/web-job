const pool = require('../connection.js');
module.exports.getIndex = async () =>{
    const client = await pool.connect();
    try{
      const result = await client.query('SELECT * FROM "congviec"');
      await client.release();
      return result;
    }
    catch(err)
    {
      console.log(err);
    }
}