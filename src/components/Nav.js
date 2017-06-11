import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <menu className="Nav Py(1em) M(0)">
        <ul className="List(n) M(0) P(0)">
          {this.props.data.map((item, i) => (
            <li className="Bgc(#000.12):h Trsdu(.3s) Cur(p)" key={i}>
              <NavLink className="C(#000.87) Td(n) Px(20px) Py(10px) D(b)" exact={item.exact} activeClassName="Fw(b)" to={item.url}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </menu>
    );
  }
}

export default Nav;
