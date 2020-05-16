import React from 'react'

import {CardTitle} from 'reactstrap'

function List(props){
    const {code,customer,employees,department,message,priority} = props
    return (
        <div>
            <CardTitle>Code No: {code}</CardTitle>
            <CardTitle>Customer: {customer}</CardTitle>
            <CardTitle>Employees: {employees}</CardTitle>
            <CardTitle>Department: {department}</CardTitle>
            <CardTitle>Message: {message}</CardTitle>
            <CardTitle>Priority: {priority}</CardTitle>
        </div>
    )
}

export default List