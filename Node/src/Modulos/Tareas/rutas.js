const express = require("express");
const respuesta = require("../../red/respuesta");
const router = express.Router();
const controlador = require("./index");

// Ruta principal
router.get("/", getALL);
router.get("/:id", uno);
router.post("/", agregar);
router.put("/", eliminar);

async function getALL(req, res) {
  const tareas = await controlador.getALL();
  respuesta.success(req, res, tareas, 200);
}
async function uno(req, res, next) {
  try {
    const items = await controlador.uno(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    next(err);
  }
}
async function agregar(req, res, next) {
  try {
    const items = await controlador.agregar(req.body);
    const mensaje = req.body.id == 0 ? "Item agregado" : "Item actualizado";
    respuesta.success(req, res, mensaje, 201);
  } catch (err) {
    next(err);
  }
}
async function eliminar(req, res, next) {
  try {
    const items = await controlador.eliminar(req.body);
    respuesta.success(req, res, "Item eliminado", 200);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
