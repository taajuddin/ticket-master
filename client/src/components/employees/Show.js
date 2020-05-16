import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import Tabs from '../common/Tabs'

class EmployeeShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tickets: []
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/api/employees/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const employee = response.data

            axios.get('/api/tickets',{
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
                .then(response=>{
                    const allTickets = response.data
                    const tickets = allTickets.filter(ticket=>{
                        return ticket.employees.find(emp=>{
                            if(emp._id == employee._id)
                                return ticket
                        })
                    })
                    this.setState({tickets})
                })
        })
        .catch(err=>{console.log(err)})
    }


    render(){
        return (
            <div>
                {this.props.employee && (
                    <div>
                        <h2>{this.props.employee.name} - {this.props.employee.email}</h2>
                        <Link to={`/employees/edit/${this.props.employee._id}`}>Edit</Link>

                        <Tabs tickets={this.state.tickets}/>
                    </div>
                )}
                
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        employee: state.employees.find(employee=>employee._id == id)
    }
}

export default connect(mapStateToProps)(EmployeeShow)