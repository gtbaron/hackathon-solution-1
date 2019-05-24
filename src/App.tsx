import React from 'react';
import logo from './logo.svg';
import './App.css';
import InteractiveLabel from "./components/InteractiveLabel";
import {Model} from "./models/model";

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <InteractiveLabel model={Model.create()}/>
    </header>
  </div>
);

export default App;
