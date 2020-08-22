var pool=require('../connection.js');

module.exports.getByID = async (id)=>{
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM "congviec"  WHERE "idcongviec"='  + '\'' + id +'\'');
      const result2 = await client.query('SELECT * FROM "congty"  WHERE "idcongty"='  + '\'' + id +'\'');
      await client.release();
      return [result,result2];
    } 
    catch(err)
    {
      console.log(err);
    }
}