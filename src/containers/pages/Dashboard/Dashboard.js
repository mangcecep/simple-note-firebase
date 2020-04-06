import React, { Component } from 'react';
import './Dashboard.scss'
import { addDataToAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        title: '',
        content: '',
        date: ''
    }
    handleSaveNotes = () => {
        const {title, content} =  this.state;
        const {saveNotes} = this.props;
        const data = {
            title : title,
            content : content,
            date : new Date().getTime(),
            userId: this.props.userData.uid
        }
        saveNotes(data)
        console.log (data)
    }

    onInputChange = (e, type) => {
        this.setState({
            [type] : e.target.value
        })
    }
    render() {
        const {title, content, date} = this.state;
        return (
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className="input-title" value={title} onChange={(e) => this.onInputChange(e, 'title')}/>
                    <textarea placeholder="content" className="input-content" value={content} onChange={(e) => this.onInputChange(e, 'content')}>

                    </textarea>
                    <button className="save-btn" onClick={this.handleSaveNotes}> Save </button>
                </div>
                <hr/>
                <div className="card-content">
                    <p className="title">title</p>
                    <p className="date">21 Sept 2020</p>
                    <p className="content">Content Notes</p>
                </div>
                {/* <button>Go To Register</button>
                <button>Go To Dashboard</button> */}
            </div>
        )
    }
}

const reduxState = state => ({
    userData : state.user
})

const reduxDispatch = dispatch => ({
    saveNotes : (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState,reduxDispatch)(Dashboard)
