import React, { Fragment, useState, useContext } from "react";

import { proyectoContext } from "../../context/proyectos/proyectoContext";

export const NuevoProyecto = () => {
  // obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

  // state Agregar Proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const handleOnChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar el proyecto
    if(nombre === '' ){return}

    // Agregar al state
    agregarProyecto(proyecto)

    // Reinciar el state
    setProyecto({ nombre: "" });
  };

  const handleClick = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primario btn-block"
        onClick={handleClick}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form onSubmit={handleSubmit} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={handleOnChange}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </Fragment>
  );
};
