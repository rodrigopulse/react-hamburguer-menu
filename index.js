import React, { Component } from 'react';
import { render } from 'react-dom';
import Menu from './componentes/Menu/Menu.js';
import './style.scss';

class App extends Component {
  render() {
    return (
      <header className="header">
        <Menu />
      </header>
    );
  }
}

render(<App />, document.getElementById('root'));