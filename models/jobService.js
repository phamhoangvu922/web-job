var pool=require('../connection.js');

module.exports.getByID = async (id)=>{
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM "congviec"  WHERE "idcongviec"='  + '\'' + id +'\'');
      await client.release();
      console.log(result);
      return [result];
    } 
    catch(err)
    {
      console.log(err);
    }
}