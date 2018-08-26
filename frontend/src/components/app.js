import React, { Component } from 'react';
import Header from './Header';
import Products from './Products';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Products />
      </React.Fragment>
    );
  }
}
