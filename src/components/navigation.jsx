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
import scrollToComponent from 'react-scroll-to-component';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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

  render() {
    return (
      <Navbar id='sideNav' color='primary' dark expand='lg' fixed='top'>
        <NavbarBrand
          href='#about'
          onClick={e => {
            this.handleClick(e, 'about');
          }}
        >
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
                href='#products'
                onClick={e => {
                  this.handleClick(e, 'products');
                }}
              >
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='#reviews'
                onClick={e => {
                  this.handleClick(e, 'reviews');
                }}
              >
                Reviews
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='#contact'
                onClick={e => {
                  this.handleClick(e, 'contact');
                }}
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}