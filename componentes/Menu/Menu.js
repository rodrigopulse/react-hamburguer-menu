import React from 'react';
import { render } from 'react-dom';

import './Menu.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      abreMenu: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      abreMenu: !this.state.abreMenu
    })
  }
  render() {
    return (
      <div className="container-menu">
        <button
          className={ this.state.abreMenu ? "hamburguer hamburguer--open" : "hamburguer" }
          onClick={this.handleClick}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div className={ this.state.abreMenu ? "menu menu--open" : "menu" }>
        </div>
      </div>
    )
  }
}
export default Menu;