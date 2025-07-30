import { redirect } from "react-router-dom";
import "../App.css";
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
      <div className="row">
        <h3 className="pendientes">PENDIENTES DE HACER</h3>
        {tareas
          .filter((t) => !t.estado)
          .map((body) => (
            <a href={`/${body.id}`} className="link col">
              <div className="card my-card " key={body.id}>
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
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const nuevoEstado = { id: body.id, estado: 1 };

                        fetch("/", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(nuevoEstado),
                        }).then((res) => {
                          if (res.ok) {
                            // window.location.href = "/";
                            location.reload();
                          } else {
                            console.error("Fallo al actualizar");
                          }
                        });
                      }}
                    >
                      <button className="btn btn-success">
                        <i className="bi bi-check2-all"></i>
                      </button>
                    </form>
                    <form method="get" action={`/modificar/${body.id}`}>
                      <button className="btn btn-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                    </form>
                    <form>
                      <button className="btn btn-danger" type="submit">
                        <i className="bi bi-trash"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </a>
          ))}
      </div>
      {/* ///// */}
      <div className="row-2">
        <h3 className="completada">COMPLETADAS</h3>

        {tareas
          .filter((t) => t.estado)
          .map((body) => (
            <a href={`/${body.id}`} className="link col">
              <div className="card my-card " key={body.id}>
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
                      <button className="btn btn-secondary">
                        <i className="bi bi-x"></i>
                      </button>
                    </form>
                    <form method="get" action={`/modificar/${body.id}`}>
                      <button className="btn btn-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                    </form>
                    <form method="get " action="/">
                      <button className="btn btn-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </a>
          ))}
      </div>
      <form action="/agregar">
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
