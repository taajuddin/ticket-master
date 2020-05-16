import React from 'react'

import TicketForm from './Form'

import {connect} from 'react-redux'
import {startAddTicket} from '../../actions/tickets'

class TicketNew extends React.Component{
    handleTicketSubmit = (ticket) => {

        const redirect = () => this.props.history.push('/tickets')
        this.props.dispatch(startAddTicket(ticket,redirect))
        
    }

    render(){
        return (
            <div>
                <h2>Add Ticket</h2>
                <TicketForm handleTicketSubmit = {this.handleTicketSubmit}/>
            </div>
        )
    }
}



export default connect()(TicketNew)