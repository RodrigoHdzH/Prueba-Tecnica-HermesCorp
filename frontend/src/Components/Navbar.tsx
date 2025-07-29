export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 ">
      <a className="navbar-brand" href="/">
        HermesCorp
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Inicio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
