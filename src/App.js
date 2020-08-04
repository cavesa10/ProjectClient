import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Login} from './components/auth/Login'
import {NuevaCuenta} from './components/auth/NuevaCuenta'
import {Proyectos} from './components/proyectos/Proyectos'

import {ProyectoState} from './context/proyectos/ProyectoState'


function App() {
  return (
    <ProyectoState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} ></Route>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} ></Route>
          <Route exact path="/proyectos" component={Proyectos} ></Route>
        </Switch>
      </BrowserRouter>
    </ProyectoState>
  );
}

export default App;
