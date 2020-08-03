import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Login} from './components/auth/Login'
import {NuevaCuenta} from './components/auth/NuevaCuenta'
import {Proyectos} from './components/proyectos/Proyectos'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} ></Route>
        <Route exact path="/proyectos" component={Proyectos} ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
