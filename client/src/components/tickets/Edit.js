import React from 'react'
import TicketForm from './Form'

import {connect} from 'react-redux'
import {startEditTicket} from '../../actions/tickets'

class TicketEdit extends React.Component{
    handleTicketSubmit = (ticket) => {

        const redirect = () => this.props.history.push(`/tickets/${ticket.id}`)
        this.props.dispatch(startEditTicket(ticket,redirect))
        
    }
    render(){
        return (
            <div>
                {this.props.ticket && (
                    <div>
                        <h2>Edit Ticket</h2>
                         {this.props.ticket && <TicketForm ticket = {this.props.ticket} handleTicketSubmit = {this.handleTicketSubmit}/>}
                     </div>
                )}
               
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        ticket: state.tickets.find(ticket=>ticket._id == id)
    }
}

export default connect(mapStateToProps)(TicketEdit)

