import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { removeFromSavedList, deleteList } from '../actions/listActions';

class ListDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRemoveFromSavedList = this.handleRemoveFromSavedList.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.lists);
  }
  handleDeleteList(e) {
    const listID = e.target.getAttribute('data-list');
    this.props.deleteList(listID);
  }

  handleRemoveFromSavedList(e) {
    e.preventDefault();
    const removedShowID = e.target.getAttribute('data-show');
    const modifiedListID = e.target.getAttribute('data-list');

    this.props.removeFromSavedList(modifiedListID, removedShowID);
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
                <span className='d-inline-block aligned-mid'>
                  {show.premiered ? show.premiered.slice(0, 4) : 'Unknown'}
                </span>
              </Col>
              <Col className='d-none d-lg-block text-center col-2'>
                <Button
                  color='danger'
                  className='my-1'
                  data-show={show.id}
                  data-list={item.listID}
                  onClick={this.handleRemoveFromSavedList}
                >
                  Remove
                </Button>
              </Col>
              <Col className='d-block d-lg-none text-center col-4'>
                <Button
                  color='danger'
                  className='d-inline-block my-1 btn-block button-limit'
                  data-show={show.id}
                  data-list={item.listID}
                  onClick={this.handleRemoveFromSavedList}
                >
                  -
                </Button>
              </Col>
            </Row>
          ))}
          <Row className='text-center mt-3'>
            <Col>
              <Button
                color='danger'
                data-list={item.listID}
                onClick={this.handleDeleteList}
              >
                Delete list
              </Button>
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
export default connect(
  mapStateToProps,
  { removeFromSavedList, deleteList }
)(ListDisplay);
