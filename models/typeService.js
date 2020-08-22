const pool = require('../connection');
module.exports.getType= async (type,search,page,numbersOfBooksPerPage) =>{
    const client = await pool.connect();
    try {
        type = getTypeName(type);
        let where = "WHERE \"dacdiem\"= '"+ type + '\'' ;
        
        if(search !== undefined)
        {
            where +=" AND \"tencongviec\" LIKE " + '\'%' + search + '%\'';
        }
        
        const result = await client.query('SELECT * FROM "congviec" ' + where );

      
        const numbersOfBooks = result.rows.length;
        const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);

        await client.release();
        return [result,numbersOfPages];

      }
      catch(err)
      {
        console.log(err);
      }
}

function getTypeName(type)
{
  if(type === 'Full Time')
  {
    type = 'Full-time';
  }
  if(type === 'Part Time')
  {
    type = 'Part-time';
  }
  if(type === 'Remote')
  {
    type = 'Remote';
  }
  if(type === 'Freelance')
  {
    type = 'Freelance';
  }
    return type;
}