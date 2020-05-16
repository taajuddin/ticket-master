import React from 'react'
import CustomerForm from './Form'

import {connect} from 'react-redux'
import { startAddCustomer } from '../../actions/customers'


class CustomerNew extends React.Component {  
    handleCustomerSubmit = (customer) => {
        
        const redirect = () => this.props.history.push('/customers')
        this.props.dispatch(startAddCustomer(customer,redirect))
    }
    render(){
        return (
            <div>
                <h2>Add Customer</h2>
                <CustomerForm handleCustomerSubmit={this.handleCustomerSubmit}/>
            </div>
        )
    }
}

export default connect()(CustomerNew)