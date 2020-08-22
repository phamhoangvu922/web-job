const pool = require('../connection');
module.exports.getLocation= async (type,search,page,numbersOfBooksPerPage) =>{
    const client = await pool.connect();
    try {
        type = getLocationName(type);
        let where = "WHERE \"diadiem\"= '"+ type + '\'' ;
        
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

function getLocationName(type)
{
  if(type === 'TP. Hồ Chí Minh')
  {
    type = 'TP.HCM';
  }
  if(type === 'Hà Nội')
  {
    type = 'Hà Nội';
  }
  if(type === 'Đà Nẵng')
  {
    type = 'Đà Nẵng';
  }
    return type;
}