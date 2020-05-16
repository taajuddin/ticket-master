import React from 'react'
import EmployeeForm from './Form'


import {connect} from 'react-redux'
import {startAddEmployee} from '../../actions/employees'

class EmployeeNew extends React.Component{

        handleEmployeeSubmit = (employee) => {

            const redirect = () => this.props.history.push('/employees')
            this.props.dispatch(startAddEmployee(employee,redirect))
        }


    render(){
        return (
            <div>
                    <h2>Add Employee</h2>
                    <EmployeeForm handleEmployeeSubmit = {this.handleEmployeeSubmit}/>
                
            </div>
        )
    }
}

export default connect()(EmployeeNew)