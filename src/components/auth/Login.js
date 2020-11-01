import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { alertaContext } from "../../context/alertas/alertaContex";
import { authContext } from "../../context/autenticacion/authContext";

export const Login = (props) => {
  // Extraer los valores del context
  const { alerta, mostrarAlerta } = useContext(alertaContext);
  const { mensaje, autenticado, iniciarSesion } = useContext(authContext);

  const [loginValidacion, setLoginValidacion] = useState({
    email: "",
    password: "",
  });
  // En caso de que el password o usario no exista
  useEffect(() => {
    if(autenticado){ 
      props.history.push('/proyectos')
      return
    }
    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
  }, [mensaje, props.history, autenticado, mostrarAlerta])
  const { email, password } = loginValidacion;

  const handleOnChange = (e) => {
    setLoginValidacion({
      ...loginValidacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Validación que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    // Pasarlos al action
    iniciarSesion({email, password})
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              autoComplete= "username"
              value={password}
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Iniciar Sesión"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          {" "}
          Crear Cuenta{" "}
        </Link>
      </div>
    </div>
  );
};
