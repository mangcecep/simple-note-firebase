import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    changeUser = () => {
        this.props.changeUserName()
    }
    render() {
        return (
            <div>
                <p>Login Page {this.props.userName}</p>
                <button onClick={this.changeUser}>Change User Name</button>
                <button>Go To Dashboard</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup,
    userName: state.user
})

const reduxDispatch = (dispatch) => ({
    chaneUserName : () => dispatch({type: 'CHANGE_USER', value: 'Cecep Solihin Yusup'})
})

export default connect(reduxState, reduxDispatch)(Login)
