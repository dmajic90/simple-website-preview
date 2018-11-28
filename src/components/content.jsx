import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Reviews from './reviews';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid={true}>
        <section id='about' className='content-section d-flex d-column'>
          <div className='content-wrapper my-auto text-left'>
            <h1 className='content-title m-0'>
              Fictional
              <span className='content-title text-primary'> company</span>
            </h1>
            <div className='content-subhead mb-3 text-secondary'>
              123 Fictional street &#x2027; Fictional city &#x2027; (123)
              456-7890 &#x2027;
              <a href='mailto:fictional@company.com'> fictional@company.com</a>
            </div>
            <div className='content-text text-secondary my-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              et ligula ligula. Maecenas dignissim felis eros, fermentum tempus
              odio accumsan hendrerit. Nulla ornare est non lectus ultrices, sed
              vulputate enim dictum. Cras vitae tellus non enim laoreet
              fringilla et in massa.
            </div>
          </div>
        </section>
        <hr />
        <section id='products' className='content-section d-flex d-column'>
          <div className='my-auto text-left'>Products</div>
        </section>
        <hr />
        <section id='reviews' className='content-section d-flex d-column'>
          <div className='my-auto text-left'>
            <Reviews />
          </div>
        </section>
        <hr />
        <section id='contact' className='content-section d-flex d-column'>
          <div className='my-auto text-left'>Contact</div>
        </section>
        <hr />
      </Container>
    );
  }
}
