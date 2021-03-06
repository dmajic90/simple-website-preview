import React, { Component } from 'react';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClick(e, refname) {
    e.preventDefault();
    scrollToComponent(document.getElementById(refname), {
      offset: 0,
      align: 'top',
      duration: 1500,
      ease: 'inCirc'
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar id='sideNav' color='primary' dark expand='lg' fixed='top'>
        <NavbarBrand
          href='#'
          onClick={e => {
            e.preventDefault();
          }}
        >
          <span className='d-block '>SHOW LISTS</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto flex-column' navbar>
            <NavItem>
              <NavLink
                href='#about'
                onClick={e => {
                  this.handleClick(e, 'about');
                }}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='#search'
                onClick={e => {
                  this.handleClick(e, 'search');
                }}
              >
                Search and create
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='#lists'
                onClick={e => {
                  this.handleClick(e, 'lists');
                }}
              >
                Lists
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='#disclaimer'
                onClick={e => {
                  this.handleClick(e, 'disclaimer');
                }}
              >
                Disclaimer
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
