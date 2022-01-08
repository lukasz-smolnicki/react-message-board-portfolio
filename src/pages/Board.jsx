import React from 'react'
import Titles from '../components/Titles.jsx'
import AddNewTitle from './AddNewTitle.jsx'
import Nav from '../components/Nav.jsx'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: '1'
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        const { handleChange, handleEditTitle, handleAddTitle, handleRemoveTitle, acitvieAddNewTitle, state } = this.props
        const { data, newTitleIsActive, loggedUserId } = this.props.state
        const titles = [...data.titles]
        switch (this.state.sort) {
            case '1':
                titles.sort((a, b) => {
                    const c = new Date(a.date)
                    const d = new Date(b.date)
                    return c - d
                })
                break;
            case '2':
                titles.sort((a, b) => {
                    const c = new Date(a.date)
                    const d = new Date(b.date)
                    return d - c
                })
                break;
            case '3':
                titles.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case '4':
                titles.sort((a, b) => b.name.localeCompare(a.name))
                break;
            default:
                titles.sort((a, b) => {
                    const c = new Date(a.date)
                    const d = new Date(b.date)
                    return c - d
                })
        }
        const titleList = titles.map(title => <Titles key={title.id} handleEditTitle={handleEditTitle} handleRemoveTitle={handleRemoveTitle} title={title} state={this.props.state} />)
        return (
            <section>
                <Nav handleChange={this.handleChange} loggedUserId={loggedUserId} newTitleIsActive={newTitleIsActive} acitvieAddNewTitle={acitvieAddNewTitle} />
                {loggedUserId && newTitleIsActive ? <AddNewTitle state={state} handleChange={handleChange} handleSubmit={handleAddTitle} acitvieAddNewTitle={acitvieAddNewTitle} /> : null}
                {titleList}
            </section >
        )
    }
}

export default Board