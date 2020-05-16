import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap'

function CustomerItem(props){
    const {index,id,name,email,mobile,handleRemove,text} = props
    return(
        <tr> 
        <td>{index+1}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{mobile}</td>
        <td><Link to={`/customers/${id}`}><Button color="info">show</Button></Link></td>
        <td><Button color="danger" onClick={()=>{
            return handleRemove(id)
        }}>{text}</Button></td>
        </tr>
    )
}

export default CustomerItem