import React from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap'



class DepartmentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.department ? props.department.name : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
    }

    handleName(e){
        const name = e.target.value
        this.setState({name})
    }
    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name:this.state.name
        }
        this.props.department && (formData.id = this.props.department._id)
        this.props.handleDepartmentSubmit(formData)
        this.setState({name:''})
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.department!== undefined){
    //         const name =  nextProps.department.name
    //         this.setState({name})
    //     }

    render(){
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="text"></Label>
                        <input type="text" id="text" value={this.state.name} onChange={this.handleName}/>
                    </FormGroup>
                    <Button type="submit" value="add">Add</Button>
                </Form>
            </div>
        )
    }
}

export default DepartmentForm 