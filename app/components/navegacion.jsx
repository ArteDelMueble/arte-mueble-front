import { Link, useLocation } from "@remix-run/react";
import icon from "../../public/img/icon.png";

export default function Navegacion() {
    const location = useLocation()
  return (
    <>
      <nav className="navegacion">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Inicio
        </Link>
        <Link
          className={location.pathname === "/blog" ? "active" : ""}
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className={location.pathname === "/insumos" ? "active" : ""}
          to="/insumos"
        >
          Insumos
        </Link>
        <Link
          className={location.pathname === "/productos" ? "active" : ""}
          to="/productos"
        >
          Productos
        </Link>
      </nav>
      <nav className="contacto">
        <Link to="/contactanos">
          Contactanos <img className="icon" src={icon} alt="tel" />
        </Link>
      </nav>
    </>
  );
}
