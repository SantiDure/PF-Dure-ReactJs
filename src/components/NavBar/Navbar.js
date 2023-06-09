import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from "./img/logo.png";
import "./navbar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navbar">
        <button
          className="navbar-toggler"
          type="a"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse nav__flex" id="navbarNav">
          <a className="navbar-brand " href="../../../public/index.html">
            <img className="logo-clean" src={logo} alt="logo de clean pc" />
            <span className="nombre">Clean PC</span>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="../../../public/index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../../public/index.html">
                Todos los productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../../public/index.html">
                Liquidación
              </a>
            </li>
          </ul>
          <div className="cart">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
