import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elemetnConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elemetnConfig: {
                    type: 'text',
                    placeholder: 'Your Street Address'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elemetnConfig: {
                    type: 'number',
                    placeholder: 'Your ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elemetnConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elemetnConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elemetnConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }
    
    render () {
        let form = (
            <form>
                <Input elementType="" elemetnConfig="" value="" />
                <Input elementType="" elemetnConfig="" value="" />
                <Input elementType="" elemetnConfig="" value="" />
                <Input elementType="" elemetnConfig="" value="" />
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
                <Button 
                    btnType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
            </div>
        );
    }
}

export default ContactData;