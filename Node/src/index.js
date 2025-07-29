const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${app.get("port")}`
  );
});
