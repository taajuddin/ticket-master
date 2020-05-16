import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import Tabs from '../common/Tabs'

class CustomerShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tickets: []
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/api/customers/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const customer=response.data

            axios.get('/api/tickets',{
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
                .then(response=>{
                    const allTickets = response.data
                    const tickets =  allTickets.filter(ticket=>ticket.customer._id == customer._id)
                
                this.setState({tickets})
            })
        })

        .catch(err=>console.log(err))
    }

    render(){
        return(
            <div className="mt-3">
                {this.props.customer && (
                    <div>
                    <h2>{this.props.customer.name} - {this.props.customer.email}</h2>

                    <Link to={`/customers/edit/${this.props.customer._id}`}> Edit </Link>
    
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
        customer: state.customers.find(customer=> customer._id == id)
    }
}

export default connect(mapStateToProps)(CustomerShow)