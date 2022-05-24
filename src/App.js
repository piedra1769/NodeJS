import React from 'react';
import logo from './logo1.png';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemCount  />
      <Button />
      <ItemListContainer greeting='¡Bienvenidos!' />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
