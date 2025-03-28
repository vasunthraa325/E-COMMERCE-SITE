const mysql=require('mysql');
const db=mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'Vasu@1248',
    port:'3306',
    database:'herbalproducts',
    connectionLimit:'10',
});

module.exports.db=db;