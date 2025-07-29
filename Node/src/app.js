const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const config = require("./config");
const tareas = require("./Modulos/Tareas/rutas");
const e = require("express");

app.use(cors());
app.use(express.json());
app.set("port", config.app.port);

//RUTAS
app.use("/", tareas);

//
module.exports = app;
