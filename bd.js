//conexion a la base de datos
const mysql2 = require('mysql2/promise');
const newConnection = async ()=>{
    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        database:"conectar" //nombre de la base de datos
    })

    return connection;

}
module.exports ={
    newConnection
}
