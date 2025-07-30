const Tareas = require(".");

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
  async function agregar(body) {
    const tarea = {
      id: body.id || 0,
      titulo: body.titulo || "",
      descripcion: body.descripcion || "",
      fecha_creacion:
        body.fecha_creacion || new Date().toISOString().slice(0, 10),
      estado: body.estado || 0,
    };
    const respuesta = await db.agregar(TABLA, tarea);

    var insertId = 0;
    if (body.id == 0) {
      insertId = respuesta.insertId;
    } else {
      insertId = body.id;
    }
  }
  function eliminar(body) {
    return db.eliminar(TABLA, body);
  }
  return {
    getALL,
    uno,
    agregar,
    eliminar,
  };
};
