import React from "react";
import Navegacion from "./navegacion";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <div className="info-adicional">
          <p className="direccion">Calle 6E # 52 - 24</p>
          <p className="copyright">
            Todos los derechos reservados © {new Date().getFullYear()}
          </p>
        </div>
        <div className="navegacion-footer">
        <Navegacion />
        </div>
      </div>
    </footer>
  );
}
