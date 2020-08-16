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

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TAREA:
      return {
        ...state,
        tareas: action.payload,
      };
    case VALIDAR_TASK:
      return {
        ...state,
        errorFormulario: true,
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        errorFormulario: false,
      };

    case TAREA_PROYECTO:
      return {
        ...state,
        tareasproyecto: state.tareas.filter(
          (tarea) => tarea.pryectoId === action.payload
        ),
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter(
          (tarea) => tarea.id !== action.payload
        ),
      };
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map(tarea => tarea.id === action.payload ? action.payload : tarea)
      }
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaSeleccionada: action.payload
      }
    case ACTUALIZA_TAREA:
      return {
        ...state,
        tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
        tareaSeleccionada: null
      }

    default:
      return state;
  }
};
