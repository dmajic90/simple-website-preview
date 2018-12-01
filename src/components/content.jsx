import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchResults from './searchResults';
import SearchForm from './searchForm';
import ListPreview from './listPreview';
import ListDisplay from './listDisplay';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
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
              look at some of the premade lists. <br />
              <br />
              Create your list by going to the SEARCH section, finding the shows
              you want and adding them to your list.
              <br />
              Once you save the list it can be found and edited in the LISTS
              section along with some premade ones.
              <br />
              <br />
              This project was created by D.Majic as a way to learn more about
              frontend development.
            </div>
          </div>
        </section>
        <hr />
        <section id='search' className='content-section d-flex d-column'>
          <div className='content-wrapper my-auto text-left'>
            <div className='content-subhead my-3 text-secondary'>
              Search our show database
            </div>
            <SearchForm />
            <div className='content-subhead my-3 text-secondary'>
              Search results
            </div>
            <SearchResults />
            <div className='content-subhead my-3 text-secondary'>
              Create your list
            </div>
            <ListPreview />
          </div>
        </section>
        <hr />
        <section id='lists' className='content-section d-flex d-column'>
          <div className='content-wrapper my-auto text-left'>
            <div className='content-subhead my-3 text-secondary'>Lists</div>
            <ListDisplay />
          </div>
        </section>
        <hr />
        <section id='disclaimer' className='content-section d-flex d-column'>
          <div className='content-wrapper my-auto text-left'>
            <div className='content-subhead mb-3 text-secondary'>
              Disclaimer
            </div>
            <div className='content-text text-secondary my-5'>
              This project was made as proof of concept and should not be used
              commercially.
              <br />
              The API used in this project was provided by TVmaze and it can be
              found <a href='http://www.tvmaze.com/api'>here</a>.
            </div>
          </div>
        </section>
      </Container>
    );
  }
}
