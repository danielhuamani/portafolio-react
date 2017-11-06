import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components_globals/header'
import Presentacion from './components/presentacion'
import MisDatos from './components/mis_datos'
import ExperienciaList from './components/experiencia'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Presentacion></Presentacion>
        <MisDatos></MisDatos>
        <ExperienciaList></ExperienciaList>
      </div>
    );
  }
}

export default App;
