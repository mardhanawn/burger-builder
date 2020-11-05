import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Bee Burger Builder App</h1>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;