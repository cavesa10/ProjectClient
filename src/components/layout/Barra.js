import React, { useContext, useEffect } from "react";
import { authContext } from "../../context/autenticacion/authContext";
import { TareaContext } from "../../context/tareas/tareaContext";
import { proyectoContext } from "../../context/proyectos/proyectoContext";

export const Barra = () => {
  const { usuario, usuarioAutenticado, cerrarSesion } = useContext(authContext);
  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);
  const {limpiarState} = useContext(TareaContext)
  const {limpiarProyecto} = useContext(proyectoContext)
  const onClick = () => {
    limpiarState()
    limpiarProyecto()
    cerrarSesion()
  
  }

  return (
    <header className="app-header">
      
        <p className="nombre-usuario">
          Hola, {usuario ? (<span>{usuario.nombre}</span>) : null}
        </p>
      
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={()=>onClick()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};
