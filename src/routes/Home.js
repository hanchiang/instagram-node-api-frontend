/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchList } from '../redux/actions/list';

import MyLoadable from '../common/MyLoadable';

import List from '../components/List';

const LoadableComponent = MyLoadable({
  loader: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve(import(/*  webpackChunkName: "Foo" */'../components/Foo'));
      } else {
        reject(new Error('OH NO!'));
      }
    }, 2000);
  })
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const { list } = this.props;

    return (
      <div className="home">
        <img src="/dist/images/header.jpg" alt="Sky" className="app-header" />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I
          frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so, we
          will be able to prove it.
        </p>

        <LoadableComponent />

        <List data={list} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state });
const mapDispatchToProps = (dispatch) => ({ fetchList: () => dispatch(startFetchList()) });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
