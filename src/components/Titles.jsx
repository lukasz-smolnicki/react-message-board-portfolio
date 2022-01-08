import React from 'react'
import { Link } from 'react-router-dom'
import { TitleButtons, TitleConfirmEdit } from './TitlesButtonsBar.jsx'

class Titles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            name: '',
            body: ''
        }
    }

    toggleEdit = (value) => {
        this.setState({
            isEdit: value,
            name: this.props.title.name,
            body: this.props.title.body
        })
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        this.setState({
            name: this.props.title.name,
            body: this.props.title.body
        })
    }

    render() {
        const { handleRemoveTitle, handleEditTitle, title } = this.props
        const { users } = this.props.state.data
        const { loggedUserId } = this.props.state
        const user = users.find(user => title.userId === user.id)
        if (this.state.isEdit && loggedUserId !== false) {
            return (
                <div className='card bg-light my-3'>
                    <form>
                        <div className='card-header'>
                            <div className='card-title'>
                                <input name='name' value={this.state.name} className='form-control' type='text' autoComplete='off' placeholder='Title' onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='card-body'>
                            <textarea name='body' value={this.state.body} className='form-control' type='text' autoComplete='off' placeholder='Title' onChange={this.handleChange} />
                        </div>
                    </form>
                    <div className='card-footer py-0 text-muted d-flex'>
                        <div className='ms-auto py-2 d-flex align-items-center'>
                            <span>Do you want to save changes?</span>
                        </div>
                        <div>
                            {loggedUserId && loggedUserId === user.id ? <TitleConfirmEdit title={title} name={this.state.name} body={this.state.body} id={title.id} handleEditTitle={handleEditTitle} handleRemoveTitle={handleRemoveTitle} toggleEdit={this.toggleEdit} /> : null}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='card bg-light my-3'>
                    <div className='card-header'>
                        <div className='card-title'>
                            <h5 className='my-2'><Link className='link-dark text-decoration-none' to={`/title/${title.id}`}>{title.name}</Link></h5>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='card-text'>{title.body}
                        </div>
                    </div>
                    <div className='card-footer py-0 text-muted d-flex'>
                        <div className='me-auto py-2 d-flex align-items-center'>
                            {title.isEdited ? <span>Edited by: <Link className='link-dark text-decoration-none' to={`/profile/${user.name}`}>{user.name}</Link> in {title.editDate}</span> : <span>Created by: <Link className='link-dark text-decoration-none' to={`/profile/${user.name}`}>{user.name}</Link> in {title.date}</span>}
                        </div>
                        <div>
                            {loggedUserId && loggedUserId === user.id ? <TitleButtons title={title} id={title.id} handleRemoveTitle={handleRemoveTitle} toggleEdit={this.toggleEdit} /> : null}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Titles