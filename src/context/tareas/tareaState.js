import React, { useReducer } from "react";

import { TareaContext } from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
  AGREGAR_TAREA,
  OBTENER_TAREA,
  TAREA_PROYECTO,
  VALIDAR_TASK,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZA_TAREA
} from "../../types";

const tareasProyecto = [
  { id: 1, pryectoId: 1, nombre: "Elegir Plataforma1", estado: true },
  { id: 2, pryectoId: 2, nombre: "Elegir Colores2", estado: true },
  { id: 3, pryectoId: 3, nombre: "Elegir Hosting3", estado: false },
  { id: 4, pryectoId: 4, nombre: "Elegir Pasarela de pago4", estado: true },
  { id: 5, pryectoId: 1, nombre: "Elegir Plataforma1", estado: true },
  { id: 6, pryectoId: 1, nombre: "Elegir Colores1", estado: true },
  { id: 7, pryectoId: 2, nombre: "Elegir Hosting2", estado: false },
  { id: 8, pryectoId: 1, nombre: "Elegir Pasarela de pago1", estado: true },
  { id: 9, pryectoId: 1, nombre: "Elegir Plataforma1", estado: true },
  { id: 10, pryectoId: 3, nombre: "Elegir Colores3", estado: true },
  { id: 11, pryectoId: 2, nombre: "Elegir Hosting2", estado: false },
  { id: 12, pryectoId: 4, nombre: "Elegir Pasarela de pago4", estado: true },
  { id: 13, pryectoId: 2, nombre: "Elegir Plataforma2", estado: true },
  { id: 14, pryectoId: 2, nombre: "Elegir Colores2", estado: true },
  { id: 15, pryectoId: 4, nombre: "Elegir Hosting4", estado: false },
  { id: 16, pryectoId: 3, nombre: "Elegir Pasarela de pago3", estado: true },
];

export const TareaState = (props) => {
  const initialState = {
    tareas: [],
    tareasproyecto: null,
    errorFormulario: false,
    tareaSeleccionada: null
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const selectTareas = (proyectoId) => {
    dispatch({
      type: TAREA_PROYECTO,
      payload: proyectoId,
    });
  };

  const obtenerTareas = () => {
    dispatch({
      type: OBTENER_TAREA,
      payload: tareasProyecto,
    });
  };

  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_TASK,
    });
  };
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };
// cambia el estado de cada tarea
const cambiarEstadoTarea = (id) => {
  dispatch({
    type: ESTADO_TAREA,
    payload: id
  })
}
// Extrae una tarea para edición
const guardarTareaActual = tarea => {
  dispatch({
    type: TAREA_ACTUAL,
    payload: tarea
  })
}

// edita o modifica una tarea
const actualizarTarea = (tarea) => {
  dispatch({
    type: ACTUALIZA_TAREA,
    payload: tarea
  })
}
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errorFormulario: state.errorFormulario,
        tareaSeleccionada: state.tareaSeleccionada,
        agregarTarea,
        obtenerTareas,
        selectTareas,
        mostrarError,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
