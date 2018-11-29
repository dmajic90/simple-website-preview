import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for='showSearch'>Search</Label>
          <Input
            type='search'
            name='search'
            id='showSearch'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Enter show name here'
          />
        </FormGroup>
        <Button color='primary' onClick={this.handleSearch}>
          Submit
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
