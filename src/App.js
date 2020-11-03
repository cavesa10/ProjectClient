import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Login} from './components/auth/Login'
import {NuevaCuenta} from './components/auth/NuevaCuenta'
import {Proyectos} from './components/proyectos/Proyectos'

import {ProyectoState} from './context/proyectos/ProyectoState'
import {TareaState} from './context/tareas/tareaState'
import {AlertaState} from './context/alertas/alertaState'
import {AuthState} from './context/autenticacion/authState'

import {RutaPrivada} from './components/rutas/RutaPrivada'

import {tokenAuth} from './config/token'

// revisar si tenemos un token
const token = localStorage.getItem('token')
if(token){ 
  tokenAuth(token)
}


function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </BrowserRouter>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
