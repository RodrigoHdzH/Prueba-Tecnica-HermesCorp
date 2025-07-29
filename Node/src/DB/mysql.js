const mysql = require("mysql");
const config = require("../config");
const { set, get } = require("../app");

const dbconnection = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

const connection = mysql.createConnection(dbconnection);

function connect() {
  connection.connect((err) => {
    if (err) {
      console.error("Error de conexión a la base de datos:", err);
      setTimeout(connect, 2000); //Reintentar la coneccion
    } else {
      console.log("Conexión a la base de datos establecida");
    }
  });
  connection.on("error", (err) => {
    console.error("Error en la conexión a la base de datos:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      connect();
    } else {
      throw err;
    }
  });
}
connect();
function getALL(tabla) {
  return new Promise((res, rej) => {
    connection.query(`Select * from ${tabla}`, (err, results) => {
      return err ? rej(err) : res(results);
    });
  });
}
function uno(tabla, id) {
  return new Promise((res, rej) => {
    connection.query(
      `SELECT * from ${tabla} WHERE id=${id}`,
      (err, results) => {
        return err ? rej(err) : res(results);
      }
    );
  });
}

module.exports = {
  getALL,
  uno,
};
