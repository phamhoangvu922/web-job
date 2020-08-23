const pool = require('../connection');

module.exports.getUser = async (email,password) =>{
    console.log("VVVVVVVVVVV");
    const client = await pool.connect();
    try {
        check = -1;
        const nguoidung = await client.query('SELECT * FROM "users"  WHERE "email"='  + '\'' + email + '\'');
        const matkhau = await client.query('SELECT * FROM "users"  WHERE "password"='  + '\'' + password + '\'');
        console.log(nguoidung.rows[0]);
        console.log(matkhau.rows[0]);
        if(nguoidung.rows[0] === undefined){
            check = 0
        }
        else{
            if(password != matkhau){
                check = 0;
            }
            else{
                check = 1;
            }
        }
        await client.release();
        console.log(check);
        return [check,nguoidung];
    } 
    catch (error) {
        console.log(error);
    }
}