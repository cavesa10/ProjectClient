import React, { useContext, useState, useEffect } from "react";

import { proyectoContext } from "../../context/proyectos/proyectoContext";
import { TareaContext } from "../../context/tareas/tareaContext";

export const FormTarea = () => {
  const { proyecto } = useContext(proyectoContext);
  const {
    tareaSeleccionada,
    errorFormulario,
    mostrarError,
    agregarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea
  } = useContext(TareaContext);

  // Effec que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setTask(tareaSeleccionada);
    } else {
      setTask({
        nombre: "",
      });
    }
  }, [tareaSeleccionada]);

  const [task, setTask] = useState({
    nombre: "",
    estado: false,
  });

  if (!proyecto) return null;

  const [proyectoActual] = proyecto;

  const handleOnChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar
    if (task.nombre.trim() === "") {
      mostrarError();
      return;
    }

    // SI es edicion o si es nueva Tarea
    if (tareaSeleccionada === null) {
      // añadomos al state local
      task.proyecto = proyectoActual._id;
      // añadimos al state global
      agregarTarea(task);
    } else {
      actualizarTarea(task);
      limpiarTarea()
    }

    // filtramos las tareas del proyecto recien agregado
    obtenerTareas(proyectoActual.id);

    // seteamos el valor

    setTask({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea..."
            name="nombre"
            value={task.nombre}
            onChange={handleOnChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-block btn-submit btn-primario"
            value={tareaSeleccionada ? "Editar Tarea" : "Enviar Tarea"}
          />
        </div>
      </form>
      {errorFormulario ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};
