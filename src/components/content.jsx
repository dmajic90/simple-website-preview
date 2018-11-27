import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid='true'>
        <section id='about' className='content-section'>
          <div className='my-auto'>About</div>
        </section>
        <hr />
        <section id='products' className='content-section'>
          <div className='my-auto'>Products</div>
        </section>
        <hr />
        <section id='reviews' className='content-section'>
          <div className='my-auto'>Reviews</div>
        </section>
        <hr />
        <section id='contact' className='content-section'>
          <div className='my-auto'>Contact</div>
        </section>
        <hr />
      </Container>
    );
  }
}
