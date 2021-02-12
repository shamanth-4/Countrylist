import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class CountryList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Country List</div>;
  }
}

export default connect(
  null,
  { fetchPosts }
)(CountryList);
