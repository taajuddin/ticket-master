import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import { Table } from 'reactstrap'

import swal from 'sweetalert'

import CustomerItem from './Item' 
import {startRemoveCustomer} from '../../actions/customers'

class CustomersList extends React.Component {
    
    handleRemove = (id) => {
        swal({
            title: "Are you want to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Successfully Deleted", {
                icon: "success",
              });
              this.props.dispatch(startRemoveCustomer(id)) 
            } 
          })
                
    }
     


    render() {
        return (
            <div>
                <h2>Customers - {this.props.customers.length}</h2>

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.customers.map((customer,index)=>{
                        return <CustomerItem key={customer._id} id={customer._id} index={index} name={customer.name} email={customer.email} mobile={customer.mobile} handleRemove={this.handleRemove} text="remove"/>
                        })}
                    </tbody>
                
                </Table>

                <Link to="customers/new">Add Customer</Link>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps)(CustomersList)