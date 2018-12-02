import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to='/' className='content-subhead'>
        Error 404,there's nothing here, click this text to return home
      </Link>
    );
  }
}
