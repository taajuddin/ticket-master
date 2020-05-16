import React from 'react'

import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap'
import { Card} from 'reactstrap'
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
import classnames from 'classnames'

import List from './List'

class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: '1'
        }
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
      }

    render(){
        const {tickets} = this.props
        return (
            <div className="mt-3">
                <Nav tabs className="mb-3">
                <NavItem>
                <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}>
                    <div style={{cursor: "pointer"}}>All</div>
                  </NavLink>
                </NavItem>

                <NavItem>
                <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}>
                    <div style={{cursor: "pointer"}}>Pending</div>
                  </NavLink>
                </NavItem>
                

                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}>
                     <div style={{cursor: "pointer"}}>Completed</div>
                  </NavLink>
                </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    { this.state.activeTab == 1 ? 
                        <div>
                        <h2 className="ml-2">Tickets - {tickets.length}</h2>
                         <Container>
                         <Row>
                             {tickets.map(ticket=>{
                                 return (
                                     <Col md="6" className="mb-2" key={ticket._id}>
                                    <Link style={{ textDecoration: 'none' }}  to={`/tickets/${ticket._id}`}>
                                     <Card body inverse color={ticket.isResolved?("success"):("danger")} className="text-center">

                                     <List code={ticket.code}
                                      customer={ticket.customer.name} employees={ticket.employees.map((emp,index)=>(index===ticket.employees.length-1)?`${emp.name}`: `${emp.name}, `)} department={ticket.department.name} message={ticket.message} priority={ticket.priority}/>
                                     </Card>
                                    </Link>
                                     </Col>
                                 )
                             })}
                        </Row>
                     </Container>
                     </div>
                    : null }
                  </TabPane>
                  <TabPane tabId="2">
                    { this.state.activeTab == 2 ? 
                        <div>
                        <h2 className="ml-2">Tickets - {tickets.filter(ticket=>!ticket.isResolved).length}</h2>
                        <Container>
                          <Row>
                            {tickets.map(ticket=>{
                              return (
                                  !ticket.isResolved &&
                                  <Col md="6" className="mb-2" key={ticket._id}>
                                  <Link style={{ textDecoration: 'none' }}  to={`/tickets/${ticket._id}`}>
                                  <Card body inverse color="danger" className="text-center">

                                  <List code={ticket.code} 
                                  customer={ticket.customer.name} employees={ticket.employees.map((emp,index)=>(index===ticket.employees.length-1)?`${emp.name}`: `${emp.name}, `)} 
                                  department={ticket.department.name} message={ticket.message} priority={ticket.priority}/>
                                  </Card>
                                  </Link>
                                  </Col>
                              )
                            })}
                          </Row>
                          </Container>
                        </div>
                    : null }
                  </TabPane>
                  <TabPane tabId="3">
                    { this.state.activeTab == 3 ? 
                        <div>
                        <h2 className="ml-2">Tickets - {tickets.filter(ticket=>ticket.isResolved).length}</h2>
                        <Container>
                        <Row>
                        {tickets.map(ticket=>{
                            return (
                                ticket.isResolved &&
                                <Col md="6" className="mb-2" key={ticket._id}>
                                <Link style={{ textDecoration: 'none' }}  to={`/tickets/${ticket._id}`}>
                                <Card body inverse color="success" className="text-center">
                                
                                <List code={ticket.code}
                                customer={ticket.customer.name} employees={ticket.employees.map((emp,index)=>(index===ticket.employees.length-1)?`${emp.name}`: `${emp.name}, `)} 
                                department={ticket.department.name} message={ticket.message} priority={ticket.priority}/>
                                </Card>
                                </Link>
                                </Col>
                            )
                        })}
                        </Row>
                        </Container>
                        </div>
                    : null }
                  </TabPane>
                </TabContent>
                

            </div>
        )
    }
}

export default Tabs