import "../index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

function FormularioTareas({ tareas }: Props) {
  const { id } = useParams();
  const idtarea = Number(id);
  // const { estado } = useParams();
  // const estadotarea = Number(estado);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState(0);
  useEffect(() => {
    const body = tareas.find((b) => b.id === idtarea);

    if (body) {
      setTitulo(body?.titulo);
      setDescripcion(body?.descripcion);
      setEstado(body?.estado);
    }
  }, [idtarea, tareas]);

  return (
    <div className="formulario">
      <h3>Editar tarea</h3>
      <form action={"/"}>
        <div className="container mt-4">
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Descripción"
            id="floatingTextarea2"
            style={{ height: "20vw" }}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea2">Descripción</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkDefault"
            checked={estado === 1}
            onChange={(e) => setEstado(e.target.checked ? 1 : 0)}
          />
          <label className="form-check-label" htmlFor="checkDefault">
            ¿Tarea completada?
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-form"
          onClick={(e) => {
            e.stopPropagation();
            axios
              .post(`http://localhost:4000/`, {
                id: idtarea,
                titulo: titulo,
                descripcion: descripcion,
                estado: estado,
              })
              .then(() => (window.location.href = "/"))
              .catch((err) => console.log("Error al Guardar:", err));
          }}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default FormularioTareas;
