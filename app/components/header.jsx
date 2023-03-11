import { Link, useLocation } from "@remix-run/react";
import logo from "../../public/img/Logo.jpg";
import Navegacion from "./navegacion";


export default function Header() {
  const location = useLocation();
  
  return (
    <header className={location.pathname === "/" ? "index" : "page"}>
      <div className="contenedor barra">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <Navegacion/>
      </div>
    </header>
  );
}
