import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar id='sideNav' color='primary' dark expand='lg' fixed='top'>
        <NavbarBrand href='#page-top'>
          <span className='d-block d-lg-none'>Company name</span>
          <span className='d-none d-lg-block'>
            <img
              className='img-fluid img-logo rounded-circle mx-auto mb-2'
              src={require('../img/logo-placeholder.png')}
              alt=''
            />
          </span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto flex-column' navbar>
            <NavItem>
              <NavLink href='#about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#reviews'>Reviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contact'>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#stop-by'>Stop by</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
