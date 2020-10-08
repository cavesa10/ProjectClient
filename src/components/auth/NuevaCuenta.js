import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom'
import {alertaContext} from '../../context/alertas/alertaContex'
import alertaReducer from "../../context/alertas/alertaReducer";

export const NuevaCuenta = () => {

  const AlertaContex = useContext(alertaContext)
  const {alerta, mostrarAlerta} = AlertaContex

  const [loginValidacion, setLoginValidacion] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })

  const {nombre, email, password, confirmar} = loginValidacion

  const handleOnChange = (e) => {
    
    setLoginValidacion({
      ...loginValidacion,
      [e.target.name]: e.target.value
    })

  };

  const handleOnSubmit = e  => {
    e.preventDefault()

    // Validación que no haya campos vacios
    if(nombre.trim() === '' || email.trim() === ''|| password.trim() === ''|| confirmar.trim() === ''){
      mostrarAlerta('Todos los campos son obligatorio', 'alerta-error')
      return
      
    }

    // password minimo de 6 caracteres
    if (password.length < 6) {
      mostrarAlerta('El password debe ser de al menos de 6 caracteres','alerta-error')
      return
    }

    // los dos pass sean iguales
    if(password !== confirmar){
      mostrarAlerta('Los password son diferentes','alerta-error')
      return     
    }

    // Pasarlos al action
  }

  return (
    <div>
      <div className="form-usuario">
        {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>  ) : null}
        <div className="contenedor-form sombra-dark">
          <h1>Crear Cuenta</h1>
          <form onSubmit={handleOnSubmit}>
          <div className="campo-form">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu Nombre"
                value={nombre}
                onChange={handleOnChange}
              />
            </div>
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
              <label htmlFor="confirmar">Confirmar Password</label>
              <input
                type="password"
                id="confirmar"
                name="confirmar"
                placeholder="Repite tu Password"
                value={confirmar}
                onChange={handleOnChange}
              />
            </div>
            <div className="campo-form">
              <input type="submit" value="Resgistar" className="btn btn-primario btn-block" />
            </div>
          </form>
          <Link to={'/'} className="enlace-cuenta" > Volver a Iniciar Sesión </Link>
        </div>
      </div>
    </div>
  );
};
