//Conexion a la base de datos:
var mysql = require("mysql");
var conexion = mysql.createConnection({

    host:'localhost',
    user:'reynaldo',
    password:'reynaldo14',
    database:'proyectolibros'
});

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