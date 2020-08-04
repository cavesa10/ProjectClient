import React, { Fragment, useState } from "react";

export const NuevoProyecto = () => {

  // state Agregar Proyecto
  const [proyecto, setProyecto] = useState({
    nombre: ''
  })

  const {nombre} = proyecto

  const handleOnChange = e => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validar el proyecto

    // Agregar al state
    
    // Reinciar el state
    setProyecto({nombre: ''})
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-primario btn-block">
        Nuevo Proyecto
      </button>

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
    </Fragment>
  );
};
