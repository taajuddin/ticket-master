import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import Tabs from '../common/Tabs'

class DepartmentShow extends React.Component{
    constructor(){
        super()
        this.state = {
            tickets: []
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/api/departments/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response=>{
                const dept = response.data

                axios.get('/api/tickets',{
                    headers: {
                        'x-auth': localStorage.getItem('authToken')
                    }
                })
                .then(response=>{
                    const allTickets = response.data
                    const tickets =  allTickets.filter(ticket=>ticket.department._id == dept._id)

                    this.setState({dept,tickets})
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render(){
        return (
            <div>
                {this.props.department && (
                    <div>
                     <h2>Name - {this.props.department.name}</h2>
                     <Link to={`/departments/edit/${this.props.department._id}`}>Edit</Link>
                     
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
        department: state.departments.find(department=>department._id == id)
    }
}

export default connect(mapStateToProps)(DepartmentShow)