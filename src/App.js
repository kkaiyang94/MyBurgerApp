import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOutSummary from './containers/CheckOut/CheckOut';
import Orders from './containers/Orders/Orders';

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
