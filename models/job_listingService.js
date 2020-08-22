var pool= require('../connection.js');

module.exports.getJob_listing =async (search,page,numbersOfJobsPerPage) => {
        const client = await pool.connect();
        try {
            let where = "";
            if(search !== undefined)
            {
                where = "WHERE tencongviec LIKE " + '\'%' + search + '%\'';
            }

            const result = await client.query("SELECT * FROM congviec " + where);
            const numbersOfJobs = result.rows.length;
            const numbersOfPages = parseInt(numbersOfJobs/numbersOfJobsPerPage)+(numbersOfJobs%numbersOfJobsPerPage === 0 ? 0 : 1);
            console.log(result);

            await client.release();
            return [result,numbersOfPages];
        } 
        catch(err)
        {
            console.log("Error");
            console.log(err);
        }
}



module.exports.getFind = async (category,type,location,page,numbersOfJobsPerPage)=>{
        const client = await pool.connect();
        try {
            category = getCategory(category);
            type= getType(type);
            location = getLocation(location);    

            let where = 'WHERE';
            let x=0;

            if(category !== '')
            {
                where += ' "loai"= '+ '\'' + category + '\'' ;
                x++;
            }
            if(type !== '')
            {
                if(x===1)
                {
                    where += " AND " 
                    x--;
                }
                where +=  ' "dacdiem"= ' + '\'' + type + '\'';
                x++;
            }
            if(location !== '')
            {
                if(x===1)
                {
                    where += " AND " 
                }
                where +=  ' "thanhpho"= ' + '\''+ location + '\'';
            }
            const result = await client.query('SELECT * FROM congviec ' +where);   
            const numbersOfJobs = result.rows.length; 
            const numbersOfPages = parseInt(numbersOfJobs/numbersOfJobsPerPage)+(numbersOfJobs%numbersOfJobsPerPage === 0 ? 0 : 1);
  
            client.release()
            return [result, numbersOfPages];
        }
        catch(err)
        {
            console.log(err);
        }
}

function getCategory(theloai)
{
    if(theloai === 'Sale/Digital')
    {
        theloai = 'Sale digital';
    }
    else if(theloai === 'IT')
    {
        theloai = 'IT';
    }
    return theloai;

}
function getType(lang)
{
    if(lang === 'Full time')
    {
        lang='full-time';
    }
    else if(lang ==='Part time')
    {
        lang = 'part-time';
    }
    else if(lang ==='Remote')
    {
        lang = 'remote';
    }
    else if(lang ==='Freelance')
    {
        lang = 'freelance';
    }
    return lang;
}

function getLocation(lang)
{
    if(lang === 'TP. Hồ Chí Minh')
    {
        lang='TP.HCM';
    }
    else if(lang ==='Hà Nội')
    {
        lang = 'Hà Nội';
    }
    else if(lang ==='Đà Nẵng')
    {
        lang = 'Đà Nẵng';
    }
    return lang;
}