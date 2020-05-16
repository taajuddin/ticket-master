import React from 'react'

import {connect} from 'react-redux'

import {startAddUser} from '../../actions/user'


class Registration extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const registerData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(registerData)

        const redirect = () => this.props.history.push('/users/login')
        this.props.dispatch(startAddUser(registerData,redirect))
        

    }

    render(){
        return (
            <div className="justify-content-md-center">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    
                    <h1 className="h1 mb-3 font-weight-normal text-center">Register</h1>

                    <label htmlFor="username" className="sr-only">Username</label>
                    <input type="text" id="username" className="form-control mb-3" placeholder="Username" name="username" onChange={this.handleClick}/>

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" id="email" className="form-control mb-3" placeholder="Email"  name="email" onChange={this.handleClick}/>

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control mb-3" placeholder="Password"  name="password" onChange={this.handleClick}/>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default  connect()(Registration)