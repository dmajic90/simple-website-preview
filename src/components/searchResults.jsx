import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchResults extends Component {
  render() {
    const results = this.props.results.map(result => (
      <div key={result.id}>
        <h3>{result.show.title}</h3>
      </div>
    ));
    return <div>{results}</div>;
  }
}
SearchResults.propTypes = {
  results: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ results: state.results.items });

export default connect(mapStateToProps)(SearchResults);
