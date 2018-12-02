import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Col, Container, Input, Label, Row } from 'reactstrap';
import { addToList, addToSavedList } from '../actions/listActions';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { selector: 0 };

    this.handleAddToList = this.handleAddToList.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
  }

  handleAddToList(e) {
    e.preventDefault();

    const name = e.currentTarget.name;
    const newState = this.props.results.find(el => el.show.id === Number(name));
    newState.visible = false;

    this.setState(newState);
    if (this.state.selector === 0) {
      if (!this.props.listItems.find(item => item.show.id === Number(name))) {
        this.props.addToList(name);
      }
    } else {
      this.props.addToSavedList(name, this.state.selector);
    }
  }

  handleSelectorChange(e) {
    e.preventDefault();

    this.setState({ selector: e.target.value });
  }

  render() {
    const results = this.props.results.map(result => (
      <Row
        key={result.show.id}
        className={result.visible ? 'border-bottom border-primary' : 'd-none'}
      >
        <Col className='text-left'>
          <span className='d-inline-block aligned-mid'>{result.show.name}</span>
        </Col>
        <Col className='d-none d-lg-block text-center col-2'>
          <span className='d-inline-block aligned-mid'>
            {result.show.premiered
              ? result.show.premiered.slice(0, 4)
              : 'Unknown'}
          </span>
        </Col>
        <Col className='d-none d-lg-block text-center col-2'>
          <Button
            color='primary'
            className='my-1'
            name={result.show.id}
            onClick={this.handleAddToList}
          >
            Add
          </Button>
        </Col>
        <Col className='d-block d-lg-none text-center col-4'>
          <Button
            color='primary'
            className='d-inline-block my-1 btn-block button-limit'
            name={result.show.id}
            onClick={this.handleAddToList}
          >
            +
          </Button>
        </Col>
      </Row>
    ));

    const inputOptions = this.props.lists.map(list => (
      <option key={list.listID} value={list.listID}>
        {list.listName}
      </option>
    ));

    return (
      <Container fluid className='mt-5'>
        <Row>
          <Label for='listSelector'>Select list for saving results</Label>
          <Input
            type='select'
            id='listSelector'
            onChange={this.handleSelectorChange}
          >
            <option value={0}>New list</option>
            {inputOptions}
          </Input>
        </Row>
        <Row className='bg-primary text-white text-center my-1'>
          <Col>Title</Col>
          <Col className='d-none d-lg-block col-2'>Year</Col>
          <Col className='d-none d-lg-block col-2'>Add</Col>
          <Col className='d-block d-lg-none text-center col-4'>Add</Col>
        </Row>
        {results}
      </Container>
    );
  }
}
SearchResults.propTypes = {
  results: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  listItems: state.results.listItems,
  lists: state.results.lists,
  results: state.results.items
});

export default connect(
  mapStateToProps,
  { addToList, addToSavedList }
)(SearchResults);
