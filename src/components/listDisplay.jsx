import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'reactstrap';

class ListDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lists = this.props.lists.map(item => (
      <Container fluid key={item.listID} className='my-3'>
        <Form>
          <Row>
            <Col className='text-left'>
              <span className='d-inline-block aligned-mid text-secondary list-title'>
                {item.listName}
              </span>
            </Col>
          </Row>
          <Row className='bg-primary text-white text-center my-1'>
            <Col>Title</Col>
            <Col className='d-none d-lg-block col-2'>Year</Col>
            <Col className='d-none d-lg-block col-2'>Remove</Col>
            <Col className='d-block d-lg-none text-center col-4'>Remove</Col>
          </Row>
          <Row />

          {item.listShows.map(show => (
            <Row key={show.id} className='border-bottom border-primary'>
              <Col className='text-left'>
                <span className='d-inline-block aligned-mid'>{show.name}</span>
              </Col>
              <Col className='d-none d-lg-block text-center col-2'>
                <span className='d-inline-block aligned-mid'>{show.year}</span>
              </Col>
              <Col className='d-none d-lg-block text-center col-2'>
                <Button color='danger' className='my-1' name={show.id}>
                  Remove
                </Button>
              </Col>
              <Col className='d-block d-lg-none text-center col-4'>
                <Button
                  color='danger'
                  className='d-inline-block my-1 btn-block button-limit'
                  name={show.id}
                >
                  -
                </Button>
              </Col>
            </Row>
          ))}
          <Row className='text-center mt-3'>
            <Col>
              <Button color='primary'>Save list</Button>
            </Col>
            <Col>
              <Button color='danger'>Delete list</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    ));

    return <React.Fragment>{lists}</React.Fragment>;
  }
}

const mapStateToProps = state => ({
  lists: state.results.lists
});
export default connect(mapStateToProps)(ListDisplay);
