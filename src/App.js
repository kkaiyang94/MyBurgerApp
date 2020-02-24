import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOutSummary from './containers/CheckOut/CheckOut';
import Orders from './containers/Orders/Orders';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Route path='/checkout' component={CheckOutSummary} />
            <Route path='/orders' exact component={Orders} />
            <Route path='/' exact component={BurgerBuilder} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
