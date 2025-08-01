import axios from "axios";

interface Props {
  tareas: {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_creacion: string;
    estado: number;
  }[];
}
function ListaTareas({ tareas }: Props) {
  return (
    <div className="contenedor">
      <div className="row-2 ">
        <h3 className="pendientes">TAREAS PENDIENTES</h3>
        {tareas
          .filter((t) => !t.estado)
          .map((body) => (
            <div
              className="card my-card "
              key={body.id}
              onClick={() => (window.location.href = `/Tarea/${body.id}`)}
              style={{ cursor: "pointer" }}
            >
              <p className="estado no-completa "> Tarea No completada </p>
              <h5>Tarea No.{body.id}</h5>{" "}
              <div className="card-body">
                <h5 className="card-text">Título: {body.titulo}</h5>
                <p className="card-text">
                  Descripción: {body.descripcion.slice(0, 50) + " ..."}
                </p>
                <p className="card-text">
                  Fecha de creación:{" "}
                  {new Date(body.fecha_creacion).toLocaleDateString("es-MX")}
                </p>
                <div className="form">
                  {/* MARCAR COMO COMPLETADO */}

                  <button
                    className="btn btn-success"
                    onClick={(e) => {
                      e.stopPropagation();
                      axios
                        .post(`http://localhost:4000/`, {
                          id: body.id,
                          titulo: body.titulo,
                          descripcion: body.descripcion,
                          estado: 1,
                        })
                        .then(() => (window.location.href = "/"))
                        .catch((err) => console.log("Error al Guardar:", err));
                    }}
                  >
                    <i className="bi bi-check2-all"></i>
                  </button>
                  {/* MODIFICAR */}

                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/modificar/${body.id}`;
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>

                  {/* ELIMINAR */}

                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      axios
                        .delete(`http://localhost:4000/eliminar/${body.id}`)
                        .then(() => location.reload())
                        .catch((err) => console.log("Error al eliminar:", err));
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* Tareas completadas */}
      <div className="row-2">
        <h3 className="completada">TAREAS CONCLUIDAS</h3>

        {tareas
          .filter((t) => t.estado)
          .map((body) => (
            <div
              className="card my-card "
              key={body.id}
              onClick={() => (window.location.href = `/Tarea/${body.id}`)}
              style={{ cursor: "pointer" }}
            >
              <p className="estado completa">Tarea Completada</p>
              <h5>Tarea No.{body.id}</h5>{" "}
              <div className="card-body">
                <h5 className="card-text">Título: {body.titulo}</h5>
                <p className="card-text">
                  Descripción: {body.descripcion.slice(0, 50) + " ..."}
                </p>
                <p className="card-text">
                  Fecha de creación:{" "}
                  {new Date(body.fecha_creacion).toLocaleDateString("es-MX")}
                </p>
                <div className="form">
                  <form>
                    {/* MARCAR COMO PENDIENTE */}
                    <button
                      className="btn btn-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        axios
                          .post(`http://localhost:4000/`, {
                            id: body.id,
                            titulo: body.titulo,
                            descripcion: body.descripcion,
                            estado: 0,
                          })
                          .then(() => (window.location.href = "/"))
                          .catch((err) =>
                            console.log("Error al Guardar:", err)
                          );
                      }}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  </form>
                  {/* MODIFICAR  */}
                  <form method="get" action={`/modificar/${body.id}`}>
                    <button className="btn btn-primary">
                      <i className="bi bi-pencil"></i>
                    </button>
                  </form>
                  {/* ELIMINAR  */}

                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      axios
                        .delete(`http://localhost:4000/eliminar/${body.id}`)
                        .then(() => location.reload())
                        .catch((err) =>
                          console.log("Error al actualizar:", err)
                        );
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* Boton flotante agregar */}

      <form action={`/agregar/0`}>
        <button className="btn-float">
          <h1>
            <i className="bi bi-plus-circle-fill"></i>
          </h1>
        </button>
      </form>
    </div>
  );
}

export default ListaTareas;
