//Conexion a la base de datos:
var mysql = require("mysql");
var conexion = mysql.createConnection({

    host:'us-cdbr-east-05.cleardb.net',
    user:'b0ca7c644054c7',
    password:'4e13a6c4',
    database:'heroku_0b9bb8f208c4153'
});
//mysql://b0ca7c644054c7:4e13a6c4@us-cdbr-east-05.cleardb.net/heroku_0b9bb8f208c4153?reconnect=true

//Mensaje de error:
conexion.connect(
    (err)=>{
        if(!err){
            console.log("CONEXION ESTABLECIDA :)")
        }else{
            console.log("CONEXION FALLIDA :`(")
        }
    }
)


module.exports = conexion;