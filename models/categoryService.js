const pool = require('../connection');
module.exports.getCategory= async (type,search,page,numbersOfBooksPerPage) =>{
    const client = await pool.connect();
    try {
        type = getCategoryName(type);
        let where = "WHERE \"loai\"= '"+ type + '\'' ;
        
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

function getCategoryName(type)
{
  if(type === 'Sale/Digital')
  {
    type = 'Sale/Digital';
  }
  if(type === 'IT')
  {
    type = 'IT';
  }
    return type;
}