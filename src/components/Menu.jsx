import React from 'react';
import {config } from 'react-spring';
import {Keyframes} from 'react-spring/renderprops'
import delay from 'delay';
import { Link } from "react-router-dom";

const items = [
  {
    key: 1,
    content: <Link to='/'>Home</Link>,
  },
  {
    key: 2,
    content: <Link to='/Languages'>Languages</Link>,
  },
];


const Menu = Keyframes.Spring({
  in: async next => {
    await next({
      transform: 'translateX(0%)',
    });
  },
  out: async next => {
    await delay(700);
    await next({
      transform: 'translateX(-100%)',
    });
  },
});

const MenuItems = Keyframes.Trail({
  in: async next => {
    await delay(600);
    await next({
      opacity: 1,
      transform: 'translateX(0px)',
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      transform: 'translateX(-40px)',
    });
  },
});

class NavSlide extends React.Component {
  state = {
    menuOpen: false,
  };

  handleBtnClick = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    return (
      <div className="MenuSlide">
        <button onClick={this.handleBtnClick}>☰</button>

        <Menu
          config={config.gentle}
          unique
          state={this.state.menuOpen ? 'in' : 'out'}
        >
          {props => (
            <nav style={{display: this.state.menuOpen ? "block" : "none", ...props}}>
              <ul>
                <MenuItems
                  keys={item => item.key}
                  items={items}
                  state={this.state.menuOpen ? 'in' : 'out'}
                  reverse={!this.state.menuOpen}
                >
                  {trailitem => trailprops => (
                    <li style={trailprops}>{trailitem.content}</li>
                  )}
                </MenuItems>
              </ul>
            </nav>
          )}
        </Menu>
      </div>
    );
  }
};


export default NavSlide;