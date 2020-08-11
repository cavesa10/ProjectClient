import React, { useReducer } from "react";
import {v4 as uuidv4} from "uuid";

import { proyectoContext } from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
} from "../../types";

export const ProyectoState = (props) => {
  const proyectos11 = [
    { id: 1, nombre: "Tienda Vitual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño web" },
    { id: 4, nombre: "MERN" },
  ];
  const initialState = {
    tareasProyecto: [
      { id: 1, nombre: "Elegir Plataforma", estado: true },
      { id: 2, nombre: "Elegir Colores", estado: true },
      { id: 3, nombre: "Elegir Hosting", estado: false },
      { id: 4, nombre: "Elegir Pasarela de pago", estado: true },
    ],
    proyectos: [],
    formulario: false,
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

  const obtenerProyectos = (proyecto) => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos11,
    });
  };

  // Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4()

    // insertar el proyecto al state
    dispatch({
      type: AGREGAR_PROYECTOS,
      playload: proyecto
    })

  };
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        tareasProyecto: state.tareasProyecto,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};
