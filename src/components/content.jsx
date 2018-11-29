import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchResults from './searchResults';
import SearchForm from './searchForm';

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
              Show
              <span className='content-title text-primary'> lists</span>
            </h1>
            <div className='content-subhead mb-3 text-secondary'>
              123 Fictional street &#x2027; Fictional city &#x2027; (123)
              456-7890 &#x2027;
              <a href='mailto:show@lists.com'> show@lists.com</a>
            </div>
            <div className='content-text text-secondary my-5'>
              Here you can create a list of your favorite TV shows or take a
              look at some of the lists made by other users. <br />
              <br />
              Creating your own list is done in the SEARCH section
              <br />
              Lists made by others can be found in the LIST section.
            </div>
          </div>
        </section>
        <hr />
        <section id='search' className='content-section d-flex d-column'>
          <div className='my-auto text-left'>
            <SearchForm />
            <SearchResults />
          </div>
        </section>
        <hr />
        <section id='list' className='content-section d-flex d-column'>
          <div className='my-auto text-left'>List</div>
        </section>
        <hr />
        <section id='disclaimer' className='content-section d-flex d-column'>
          <div className='my-auto text-left'>
            <div className='content-subhead mb-3 text-secondary'>
              Disclaimer
            </div>
            <div className='content-text text-secondary my-5'>
              This project was made as proof of concept and should not be used
              commercially.
              <br />
              The API used in this project can be found{' '}
              <a href='http://www.tvmaze.com/api'>here</a>.
            </div>
          </div>
        </section>
      </Container>
    );
  }
}
