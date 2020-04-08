import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { actionUserName } from '../../../config/redux/action'
import { loginUserAPI } from '../../../config/redux/action';

import Button from '../../../components/atoms/Button';

export class Login extends Component {
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

    handleLoginSubmit = async () => {
        const {email, password} = this.state;
        const {history} = this.props;
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if (res) {
            console.log('login success', res);

            localStorage.setItem('userData', JSON.stringify(res))
            this.setState({
                email: '',
                password: ''
            })
            history.push('/')
        } else {
            console.log('login failed')
        }
    }
    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    <input className="input" id="password" placeholder='Password' type="password" onChange={this.handleChangeText} value={this.state.password}/>
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
                    {/* <button className="btn" onClick={this.handleRegisterSubmit}> Register </button> */}
                    {/* <button>Go To Dashboard</button> */}
                </div>
            </div>
        )
    }
}

// const actionUserName = () => (dispatch) => {
//     setTimeout( () => {
//         return dispatch({type: 'CHANGE_USER', value: 'Cecep Solihin Yusup'});
//     }, 1000)
// }

// const reduxState = state => ({
//     popupProps: state.popup,
//     userName: state.user
// })

// const reduxDispatch = dispatch => ({
//     changeUserName : () => dispatch(actionUserName(dispatch))
// })

const reduxState = state => ({
    isLoading: state.isLoading
})

const reduxDispatch = dispatch => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login)
