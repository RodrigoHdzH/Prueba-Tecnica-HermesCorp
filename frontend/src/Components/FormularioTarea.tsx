import "../index.css";

function FormularioTareas() {
  return (
    <div className="formulario">
      <form>
        <div className="mb-3">
          <label className="form-label">Formulario Tareas</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Titulo"
          ></input>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Descripción"
            id="floatingTextarea2"
            style={{ height: "20vw" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Descripción</label>
        </div>

        <button type="submit" className="btn btn-primary btn-form">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default FormularioTareas;
