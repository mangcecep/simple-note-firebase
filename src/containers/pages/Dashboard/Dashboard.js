import React, { Component, Fragment } from 'react';
import './Dashboard.scss'
import { addDataToAPI, getDataFromAPI, updateDataAPI, deleteDataAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        title: '',
        content: '',
        date: '',
        textButton: 'SAVE',
        noteId: ''
    }

    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getNotes(userData.uid);
    }

    // componentDidMount(){
    //     const userData = localStorage.getItem('userData')
    //     console.log('Dasboard : ', JSON.parse(userData))
    // }

    handleSaveNotes = () => {
        const {title, content, textButton, noteId} =  this.state;
        const {saveNotes, updateNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data = {
            title : title,
            content : content,
            date : new Date().getTime(),
            userId: userData.uid
        }
        if (textButton === 'SAVE') {
            saveNotes(data)
            console.log (data)
        } else {
            data.noteId = noteId;
            updateNotes(data)
        }
    }

    onInputChange = (e, type) => {
        this.setState({
            [type] : e.target.value
        })
    }

    updateNotes = (note) => {
        console.log(note)
        this.setState({
            title: note.data.title,
            content: note.data.content,
            textButton: 'UPDATE',
            noteId: note.id
        })
    }

    cancelUpdate = () => {
        this.setState({
            title : '',
            content : '',
            textButton: 'SIMPAN'
        })
    }

    deleteNote = (e, note) => {
        e.stopPropagation();
        const {deleteNote} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data = {
            userId: userData.uid,
            noteId: note.id
        }
        deleteNote(data)
    }

    render() {

        const {title, content, textButton} = this.state;
        const {notes} = this.props;
        const {updateNotes, cancelUpdate, deleteNote} = this;

        console.log('notes : ', notes);

        return (
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className="input-title" value={title} onChange={(e) => this.onInputChange(e, 'title')}/>
                    <textarea placeholder="content" className="input-content" value={content} onChange={(e, note) => this.onInputChange(e, 'content')}>

                    </textarea>
                    <div className="action-wrapper">
                        {
                            textButton === 'UPDATE' ? (
                                <button className="save-btn cancel" onClick={this.handleSaveNotes} onClick={cancelUpdate}> CANCEL </button>
                             ) : null
                        }
                        <button className="save-btn" onClick={this.handleSaveNotes}> {textButton} </button>
                    </div>
                </div>
                <hr/>
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                notes.map(note => {
                                    return (
                                    <div className="card-content" key={note.id} onClick={() => updateNotes(note)}>
                                        <p className="title">{note.data.title}</p>
                                        <p className="date">{note.data.date}</p>
                                        <p className="content">{note.data.content}</p>
                                        <div className="delete-btn" onClick={e => deleteNote(e, note)}>x</div>
                                    </div>
                                    )
                                })
                            }
                        </Fragment>

                     ) : null
                }
                {/* <button>Go To Register</button>
                <button>Go To Dashboard</button> */}
            </div>
        )
    }
}

const reduxState = state => ({
    userData : state.user,
    notes: state.notes
})

const reduxDispatch = dispatch => ({
    saveNotes : (data) => dispatch(addDataToAPI(data)),
    getNotes : (data) => dispatch(getDataFromAPI(data)),
    updateNotes : (data) => dispatch(updateDataAPI(data)),
    deleteNote : (data) => dispatch(deleteDataAPI(data))
})

export default connect(reduxState,reduxDispatch)(Dashboard)
