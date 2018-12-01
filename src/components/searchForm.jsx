import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { fetchResults } from '../actions/searchActions.js';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchResults(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSearch}>
        <FormGroup>
          <Input
            type='search'
            name='search'
            aria-label='Search'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Enter show name here'
          />
        </FormGroup>
        <Button
          color='primary'
          className='ml-1 form-group'
          onClick={this.handleSearch}
        >
          Search
        </Button>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  fetchResults: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchResults }
)(SearchForm);
