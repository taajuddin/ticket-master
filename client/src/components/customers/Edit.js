import React from 'react'
import CustomerForm from './Form'

import {connect} from 'react-redux'
import { startEditCustomer } from '../../actions/customers'

 class CustomerEdit extends React.Component{
    
    handleCustomerSubmit = (customer) => {

        const redirect = () => this.props.history.push(`/customers/${customer.id}`)
        this.props.dispatch(startEditCustomer(customer,redirect))
    }
    render(){
        return (
            <div>
                {this.props.customer && (
                    <div>
                    <h2>Edit Customer</h2>
                     {this.props.customer.name && <CustomerForm customer = {this.props.customer} handleCustomerSubmit = {this.handleCustomerSubmit} />}
                     {/* <CustomerForm customer = {this.props.customer} handleCustomerSubmit = {this.handleCustomerSubmit}/> */}
                    </div>
                )}
                    
            </div>
        )}
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        customer: state.customers.find(customer=>customer._id == id)
    }
}

export default connect(mapStateToProps)(CustomerEdit)