import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';

class ListPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { listName: '' };
  }

  render() {
    const listItems = this.props.listItems.map(item => (
      <Row key={item.show.id} className='border-bottom border-primary'>
        <Col className='text-left'>
          <span className='d-inline-block aligned-mid'>{item.show.name}</span>
        </Col>
        <Col className='d-none d-lg-block text-center col-2'>
          <span className='d-inline-block aligned-mid'>
            {item.show.premiered ? item.show.premiered.slice(0, 4) : 'Unknown'}
          </span>
        </Col>
        <Col className='d-none d-lg-block text-center col-2'>
          <Button color='primary' className='my-1'>
            Remove
          </Button>
        </Col>
        <Col className='d-block d-lg-none text-center col-4'>
          <Button
            color='primary'
            className='d-inline-block my-1 btn-block button-limit'
          >
            -
          </Button>
        </Col>
      </Row>
    ));

    return (
      <Container fluid className='mt-5'>
        <Row className='bg-primary text-white text-center my-1'>
          <Col>Title</Col>
          <Col className='d-none d-lg-block col-2'>Year</Col>
          <Col className='d-none d-lg-block col-2'>Remove</Col>
          <Col className='d-block d-lg-none text-center col-4'>Remove</Col>
        </Row>
        {listItems}
      </Container>
    );
  }
}

ListPreview.propTypes = {
  listItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  listItems: state.results.listItems,
  results: state.results.items
});

export default connect(mapStateToProps)(ListPreview);
