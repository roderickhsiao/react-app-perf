import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends PureComponent {
  render() {
    return (
      <menu className="Nav Py(1em) M(0)">
        <ul className="List(n) M(0) P(0)">
          {this.props.data.map((item, i) => (
            <li className="Px(20px) Py(10px) Bgc(#000.12):h Trsdu(.3s) Cur(p)" key={i}>
              <NavLink className="C(#000.87) Td(n)" activeClassName="Fw(b)" to={item.url}>
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
