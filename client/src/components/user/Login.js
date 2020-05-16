import React from 'react'
import {connect} from 'react-redux'

import {startSetUser} from '../../actions/user'


class Login extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
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
        const loginData = {
            email: this.state.email,
            password: this.state.password
        }
        const redirect = () => this.props.history.push('/')
        this.props.dispatch(startSetUser(loginData,redirect))
        
    }

    render(){
        return (
            <div className="justify-content-md-center ">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    
                    <h1 className="h1 mb-3 font-weight-normal text-center">Login</h1>

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" id="email" className="form-control mb-3" placeholder="Email"  name="email" onChange={this.handleClick}/>

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control mb-3" placeholder="Password"  name="password" onChange={this.handleClick}/>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
       user:state.user
    }
}

export default connect(mapsStateToProps)(Login)