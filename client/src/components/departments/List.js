import React from 'react'
import {Link} from 'react-router-dom'
import { ListGroup, ListGroupItem,Button } from 'reactstrap'

import {connect} from 'react-redux'

import DepartmentForm from './Form'
import { startRemoveDepartment, startAddDepartment } from '../../actions/departments'

import swal from 'sweetalert'

class DepartmentsList extends React.Component {
    
    handleDepartmentSubmit = (department) => {
    const redirect = () => this.props.history.push('/departments')
    this.props.dispatch(startAddDepartment(department,redirect))
 }


  handleRemove = (id) =>{
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
          this.props.dispatch(startRemoveDepartment(id))
        } 
      })
        

      
  }
    render(){
        return (
            <div>
                <h2>Departments - {this.props.departments.length}</h2>
                    <ListGroup>
                        {this.props.departments.map(dept=>{
                           return <ListGroupItem key={dept._id}>{dept.name}<Button className="float-right" color="danger" onClick={()=>{
                               this.handleRemove(dept._id)
                           }}>remove</Button>
                        <Link to={`/departments/${dept._id}`}><Button className="float-right mr-5" color="info">show</Button></Link>
                        </ListGroupItem> }
                        )}
                    </ListGroup>
                    <br/>
                    <h3>Add Department</h3>
                    <DepartmentForm handleDepartmentSubmit = {this.handleDepartmentSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        departments:state.departments
    }
}

export default connect(mapStateToProps)(DepartmentsList)