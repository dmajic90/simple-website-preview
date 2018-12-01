import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { addToList } from '../actions/listActions';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleAddToList = this.handleAddToList.bind(this);
  }

  handleAddToList(e) {
    e.preventDefault();
    const name = e.currentTarget.name;
    const newState = this.props.results.find(el => el.show.id === Number(name));
    newState.visible = false;
    this.setState(newState);
    this.props.addToList(name);
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

    return (
      <Container fluid className='mt-5'>
        <Row className='bg-primary text-white text-center my-1'>
          <Col>Title</Col>
          <Col className='d-none d-lg-block col-2'>Year</Col>
          <Col className='d-none d-lg-block col-2'>Add</Col>
          <Col className='d-block d-lg-none text-center col-4'>Add</Col>
        </Row>
        {results}{' '}
      </Container>
    );
  }
}
SearchResults.propTypes = {
  results: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ results: state.results.items });

export default connect(
  mapStateToProps,
  { addToList }
)(SearchResults);
