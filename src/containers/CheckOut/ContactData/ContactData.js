import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    loading: false,
    name: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: ''
    }
  }
  orderHandler = (e) => {
    const { ingredients, totalPrice } = this.props;
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients,
      totalPrice,
      deliverySpeed: 'fastest',
      customerInfo: {
        name: 'BurgerMan',
        address: {
          street: 'RandoStreet',
          zipCode: '12345',
          country: 'Wonderland'
        },
        email: 'burgerman@burgerplace.com'
      },
    }
    axios.post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false })
        this.props.history.push('/');
      })
      .catch(() => this.setState({
        loading: false
      }));
  }
  render() {
    const { loading } = this.state;
    let form = (
      <form>
        <input className={classes.Input} type='text' name='name' placeholder='John Doe' />
        <input className={classes.Input} type='text' name='address' placeholder='1234 John Doe Way' />
        <input className={classes.Input} type='text' name='city' placeholder='John Doe City' />
        <input className={classes.Input} type='text' name='state' placeholder='California' />
        <input className={classes.Input} type='text' name='postalCode' placeholder='59482' />
        <Button btnType="Success" clicked={this.orderHandler}>Submit</Button>
      </form>
    )
    if (loading) form = <Spinner />
    return (
      <div className={classes.ContactData}>
        <h2>Before Ordering, please enter you contact information</h2>
        {form}
      </div>
    )
  }
}

export default ContactData;