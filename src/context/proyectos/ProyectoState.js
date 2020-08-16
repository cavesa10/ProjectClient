import React, { useReducer } from "react";
import {v4 as uuidv4} from "uuid";

import { proyectoContext } from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECYO
} from "../../types";

export const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Vitual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño web" },
    { id: 4, nombre: "MERN" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null
  };

  // dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // obtener los proyectos

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  // Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4()

    // insertar el proyecto al state
    dispatch({
      type: AGREGAR_PROYECTOS,
      payload: proyecto
    })

  };

  // MOSTAR SI HAY ERROR AL AÑADIR UNA NUEVO PROYECTO 

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }
  // selecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }
  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECYO,
      payload: proyectoId
    })
  }

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};
