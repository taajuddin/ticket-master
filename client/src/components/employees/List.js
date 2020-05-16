import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import { Table } from 'reactstrap'

import swal from 'sweetalert'

import EmployeeItem from './Item'
import {startRemoveEmployee} from '../../actions/employees'


class EmployeesList extends React.Component {

    handleRemove = (id) => {
        swal({
            title: "Are you sure you want to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Successfully Deleted", {
                icon: "success",
              });
              this.props.dispatch(startRemoveEmployee(id))
            } 
          })
    }

    findDepartment(id) {
        // console.log(this.props.departments.find(dept => dept._id == id))
         return this.props.departments.find(dept => dept._id == id)
    }
       

    
    render(){
        return(
            <div>
                    <h2>Employees - {this.props.employees.length}</h2>
                    <Table striped>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Department</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                                {this.props.employees.map((employee,index) => {
                                    return <EmployeeItem key={employee._id} 
                                                        id={employee._id} 
                                                        index={index} 
                                                        name={employee.name} 
                                                        email={employee.email} 
                                                        mobile={employee.mobile} 
                                                        department= {employee.department.name ? employee.department.name : this.findDepartment(employee.department).name} 
                                                        handleRemove = {this.handleRemove} 
                                                        text="remove"/>
                                })}

                   </tbody>

                   </Table>
                    <Link to="/employees/new">Add Employee</Link>      
            </div>
            )
        }
    }   

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        departments: state.departments
    }
}

export default connect(mapStateToProps)(EmployeesList)