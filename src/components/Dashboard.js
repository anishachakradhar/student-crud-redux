import React, { Component } from 'react';

import Home from './Home';
import Header from './Header';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}
