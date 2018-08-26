import React, { Component } from 'react'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
  render() {
    return (
        <Nav pills>
        <NavItem>
          <NavLink href="#" active>Checkout</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Orders</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Store</NavLink>
        </NavItem>
      </Nav>
    )
  }
}
export default Header;