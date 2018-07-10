import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <p>Test</p>
        <BurguerBuilder />
      </Layout>
    );
  }
}

export default App;
