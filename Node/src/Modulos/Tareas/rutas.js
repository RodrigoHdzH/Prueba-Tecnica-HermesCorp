const express = require("express");
const respuesta = require("../../red/respuesta");
const router = express.Router();
const controlador = require("./index");

// Ruta principal
router.get("/", getALL);
router.get("/:id", uno);
// router.post("/", agregar);

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
// function agregar(req,res)

module.exports = router;
