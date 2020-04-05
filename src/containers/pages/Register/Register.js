import React, { Component } from 'react'
import './Register.scss';
import Button from '../../../components/atoms/Button';

import { connect } from 'react-redux'
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component {
    state = {
        email : '',
        password: ''
    }

    handleChangeText = e => {
        // console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
            // email: e.target.value,
            // password: e.target.value
        })
    }

    handleRegisterSubmit = () => {
        console.log('email: ', this.state.email)
        console.log('pass: ', this.state.password)
        const {email, password} = this.state;
        console.log('data before send : ', email, password)
        this.props.registerAPI({email, password})
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then(res => {
        //     console.log('success: ', res);
        // })
        // .catch(function(error) {
        //     //Handle Errors here
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log(errorCode, errorMessage)
        // });
    }


    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText}/>
                    <input className="input" id="password" placeholder='Password' type="password" onChange={this.handleChangeText}/>
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
                    {/* <button className="btn" onClick={this.handleRegisterSubmit}> Register </button> */}
                    {/* <button>Go To Dashboard</button> */}
                </div>
            </div>
        )
    }
}

const reduxState = state => ({
    isLoading: state.isLoading
})

const reduxDispatch = dispatch => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register)
