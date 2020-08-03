import React, {useState} from "react";
import {Link} from 'react-router-dom'

export const Login = () => {

  const [loginValidacion, setLoginValidacion] = useState({
    email: '',
    password: ''
  })

  const {email, password} = loginValidacion

  const handleOnChange = (e) => {
    
    setLoginValidacion({
      ...loginValidacion,
      [e.target.name]: e.target.value
    })

  };

  const handleOnSubmit = e  => {
    e.preventDefault()

    // Validación que no haya campos vacios

    // Pasarlos al action
  }

  return (
    <div>
      <div className="form-usuario">
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
                value={password}
                onChange={handleOnChange}
              />
            </div>
            <div className="campo-form">
              <input type="submit" value="Iniciar Sesión" className="btn btn-primario btn-block" />
            </div>
          </form>
          <Link to={'/nueva-cuenta'} className="enlace-cuenta" > Crear Cuenta </Link>
        </div>
      </div>
    </div>
  );
};
