import { useFetch } from "./useFetch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaTareas from "./Components/ListaTareas";
import TareaDetalle from "./Components/TareaDetalle";
import FormularioTareas from "./Components/FormularioTarea";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch("http://localhost:4000");

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="tareas-lista">
          {loading && <h1 className="cargando">Cargando...</h1>}
          {error && (
            <h1 style={{ color: "red", textAlign: "center" }}>{error}</h1>
          )}
          {/*  */}
          {/*  */}

          {!error && (
            <Routes>
              <Route
                path="/"
                element={<ListaTareas tareas={data?.body || []} />}
              ></Route>
              <Route
                path="/Tarea/:id"
                element={<TareaDetalle tareas={data?.body || []} />}
              ></Route>
              <Route
                path="/agregar/:id"
                element={<FormularioTareas tareas={data?.body || []} />}
              ></Route>

              <Route
                path="/modificar/:id"
                element={<FormularioTareas tareas={data?.body || []} />}
              ></Route>
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
