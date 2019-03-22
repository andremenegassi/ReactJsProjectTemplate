import React from 'react';

import {BrowserRouter as  Router, 
        Route} from "react-router-dom";

import LoginIndex from "./components/screens/login/Index";
import HomeIndex from "./components/screens/home/Index";
import UsuarioIndex from "./components/screens/usuario/Index";
import UsuarioPesquisar from "./components/screens/usuario/Pesquisar";


export default class App extends React.Component {
  render() {

    let html = 
      <Router>
        <div>
              <Route exact path="/" component={LoginIndex} />
              <Route exact path="/login" component={LoginIndex} />
              <Route exact path="/home" component={HomeIndex}/>
              <Route exact path="/usuario" component={UsuarioIndex}/>
              <Route exact path="/usuario/pesquisar" component={UsuarioPesquisar}/>
        </div>
      </Router>

    return (html);
  }
}