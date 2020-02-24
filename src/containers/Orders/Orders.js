import React, { Component } from 'react';
import axios from '../../axios-orders';

import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import WithErrorHandling from '../../hoc/WithErrorHandling/WithErrorHandling';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }
  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const loadOrders = [];

        for (let key in res.data) {
          loadOrders.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({
          orders: loadOrders,
          loading: false,
        })
      })
      .catch(err => {
        this.setState({
          loading: false,
        })
      })

  }
  render() {
    const { orders, loading } = this.state;
    let loadingSpinner = <Spinner />;
    if (!loading) loadingSpinner = null;

    return (
      <div>
        {loadingSpinner}
        {orders.map(order => {
          return <Order key={order.id} ingredients={order.ingredients} price={order.totalPrice} />
        })}
      </div>
    )
  }
}

export default WithErrorHandling(Orders, axios);