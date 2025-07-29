const TABLA = "tareas";

module.exports = (db) => {
  if (!db) {
    db = require("../../DB/mysql");
  }
  function getALL() {
    return db.getALL(TABLA);
  }
  function uno(id) {
    return db.uno(TABLA, id);
  }
  return {
    getALL,
    uno,
  };
};
