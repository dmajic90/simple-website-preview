import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row
} from 'reactstrap';
import {
  removeFromList,
  resetSearchAndPreview,
  saveNewList
} from '../actions/listActions';
import { updateSearchResults } from '../actions/searchActions';

class ListPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { listName: '' };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    this.handleSaveList = this.handleSaveList.bind(this);
  }

  handleNameChange(e) {
    this.setState({ listName: e.target.value });
  }

  handleRemoveFromList(e) {
    e.preventDefault();
    const name = e.currentTarget.name;

    this.props.updateSearchResults(name);
    this.props.removeFromList(name);
  }

  handleSaveList(e) {
    e.preventDefault();
    const newList = {
      listID: '',
      listName: this.state.listName,
      listShows: this.props.listItems.map(item => {
        const list = {};
        list.name = item.show.name;
        list.id = item.show.id;
        list.year = item.show.premiered
          ? item.show.premiered.slice(0, 4)
          : 'Unknown';
        return list;
      })
    };

    this.props.saveNewList(newList);
    this.props.resetSearchAndPreview();
    this.setState({ listName: '' });
  }

  render() {
    function compare(a, b) {
      if (a.show.name < b.show.name) return -1;
      if (a.show.name > b.show.name) return 1;
      return 0;
    }

    const sortedProps = this.props.listItems.sort(compare);

    const listItems = sortedProps.map(item => (
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
          <Button
            color='danger'
            className='my-1'
            name={item.show.id}
            onClick={this.handleRemoveFromList}
          >
            Remove
          </Button>
        </Col>
        <Col className='d-block d-lg-none text-center col-4'>
          <Button
            color='danger'
            className='d-inline-block my-1 btn-block button-limit'
            name={item.show.id}
            onClick={this.handleRemoveFromList}
          >
            -
          </Button>
        </Col>
      </Row>
    ));

    return (
      <Container fluid className='mt-5'>
        <Form onSubmit={this.handleSaveList}>
          <Row className='bg-primary text-white text-center my-1'>
            <Col>Title</Col>
            <Col className='d-none d-lg-block col-2'>Year</Col>
            <Col className='d-none d-lg-block col-2'>Remove</Col>
            <Col className='d-block d-lg-none text-center col-4'>Remove</Col>
          </Row>
          {listItems}
          <Row className='my-3'>
            <FormGroup>
              <Input
                type='search'
                name='listName'
                aria-label='List name'
                value={this.state.listName}
                onChange={this.handleNameChange}
                placeholder='Enter list name here'
              />
            </FormGroup>
            <Button
              color='primary'
              className='ml-1 form-group'
              onClick={this.handleSaveList}
            >
              Save list
            </Button>
          </Row>
        </Form>
      </Container>
    );
  }
}

ListPreview.propTypes = {
  listItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  listItems: state.results.listItems,
  lists: state.results.lists,
  results: state.results.items
});

export default connect(
  mapStateToProps,
  { removeFromList, resetSearchAndPreview, saveNewList, updateSearchResults }
)(ListPreview);
