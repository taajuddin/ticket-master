import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import { ListGroup, ListGroupItem } from 'reactstrap'

 class TicketShow extends React.Component{

    findCustomer =  (id) => {
        return this.props.customers.find(customer => customer._id == id )
    }

    findDepartment = (id) => {
        return this.props.departments.find(department => department._id == id)
    }

    findEmployees = (id) => {
        return this.props.employees.find(employee => employee._id == id)
    }

    render(){
        return (
            <div>
                {this.props.ticket && (
                    <div>
                    <h2>Code Number - {this.props.ticket.code}</h2>
                    <ListGroup>
                    <ListGroupItem>Customer -{this.props.ticket.customer.name? this.props.ticket.customer.name : this.findCustomer(this.props.ticket.customer).name}  </ListGroupItem>
                    <ListGroupItem>Employees - {this.props.ticket.employees[0].name ? this.props.ticket.employees.map((emp,index)=>(index===this.props.ticket.employees.length-1)?`${emp.name}`: `${emp.name}, `): this.props.ticket.employees.map((emp,index)=>(index===this.props.ticket.employees.length-1)?`${this.findEmployees(emp).name}`: `${this.findEmployees(emp).name}, `)} </ListGroupItem>
                    <ListGroupItem>Department - {this.props.ticket.department.name? this.props.ticket.department.name: this.findDepartment(this.props.ticket.department).name}</ListGroupItem>
                    <ListGroupItem>Message - {this.props.ticket.message}</ListGroupItem>
                    <ListGroupItem>Priority - {this.props.ticket.priority}</ListGroupItem>
                    </ListGroup>
                    <Link className="ml-1" to={`/tickets/edit/${this.props.ticket._id}`}>Edit</Link>
                    </div>
                )}
                

            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        ticket: state.tickets.find(ticket=> ticket._id == id ),
        employees: state.employees,
        customers: state.customers,
        departments: state.departments,
    }
}

export default connect(mapStateToProps)(TicketShow)