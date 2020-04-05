import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionUserName } from '../../../config/redux/action'

export class Login extends Component {
    changeUser = (props) => {
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

// const actionUserName = () => (dispatch) => {
//     setTimeout( () => {
//         return dispatch({type: 'CHANGE_USER', value: 'Cecep Solihin Yusup'});
//     }, 1000)
// }

const reduxState = state => ({
    popupProps: state.popup,
    userName: state.user
})

const reduxDispatch = dispatch => ({
    changeUserName : () => dispatch(actionUserName(dispatch))
})

export default connect(reduxState, reduxDispatch)(Login)
