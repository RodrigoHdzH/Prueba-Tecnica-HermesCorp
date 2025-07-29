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
    <div className="row ">
      {tareas.map((body) => (
        <a href={`/${body.id}`} className="link col">
          <div className="card my-card " key={body.id}>
            {body.estado ? (
              <p className="estado completa">Tarea Completada</p>
            ) : (
              <p className="estado no-completa "> Tarea No completada </p>
            )}
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
                {body.estado ? (
                  <form>
                    <button className="btn btn-danger">Marcar Pendiente</button>
                  </form>
                ) : (
                  <form>
                    <button className="btn btn-success">
                      Marcar como Completada
                    </button>
                  </form>
                )}

                <form method="get " action="/">
                  <button className="btn btn-primary">Modificar Tarea</button>
                </form>
                <form method="get " action="/">
                  <button className="btn btn-danger">Eliminar Tarea</button>
                </form>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ListaTareas;
