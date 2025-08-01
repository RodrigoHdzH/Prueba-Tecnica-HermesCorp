import { useParams } from "react-router-dom";
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

function TareaDetalle({ tareas }: Props) {
  const { id } = useParams();
  const idtarea = Number(id);

  const body = tareas.find((b) => b.id === idtarea);
  if (!body) return <h1 style={{ color: "red" }}>Tarea no encontrada</h1>;

  return (
    <div className="card my-cardd">
      {body.estado ? (
        <p className="estado completa">Tarea Completada</p>
      ) : (
        <p className="estado no-completa "> Tarea No completada </p>
      )}
      <h5>Tarea No.{body.id}</h5>{" "}
      <div className="card-body">
        <h5 className="card-text">Título: {body.titulo}</h5>
        <p className="card-text">Descripción: {body.descripcion}</p>
        <p className="card-text">
          Fecha de creación:{" "}
          {new Date(body.fecha_creacion).toLocaleDateString("es-MX")}
        </p>
        <div className="form">
          {body.estado ? (
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
                  .then(() => location.reload())
                  .catch((err) => console.log("Error al Guardar:", err));
              }}
            >
              <i className="bi bi-x"></i>
            </button>
          ) : (
            <form>
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
                    .then(() => location.reload())
                    .catch((err) => console.log("Error al Guardar:", err));
                }}
              >
                <i className="bi bi-check2-all"></i>
              </button>
            </form>
          )}

          <form method="get " action={`/modificar/${body.id}`}>
            <button className="btn btn-primary">
              <i className="bi bi-pencil"></i>
            </button>
          </form>

          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.stopPropagation();
              axios
                .delete(`http://localhost:4000/eliminar/${body.id}`)
                .then(() => (window.location.href = "/"))

                .catch((err) => console.log("Error al eliminar:", err));
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TareaDetalle;
