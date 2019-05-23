import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './Home.css';
import { fetchHelloRequest } from '../actions/data';
import Carousel from './Carousel'

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHello();
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <Carousel/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.data.message,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getHello: () => dispatch(fetchHelloRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);