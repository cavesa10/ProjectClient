import React, { useContext, useEffect } from "react";
import { authContext } from "../../context/autenticacion/authContext";

export const Barra = () => {
  const { usuario, usuarioAutenticado, cerrarSesion } = useContext(authContext);
  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);


  return (
    <header className="app-header">
      
        <p className="nombre-usuario">
          Hola, {usuario ? (<span>{usuario.nombre}</span>) : null}
        </p>
      
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};
