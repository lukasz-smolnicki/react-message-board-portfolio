import React from 'react'
import Titles from '../components/Titles.jsx'
import AddNewTitle from './AddNewTitle.jsx'
import Nav from '../components/Nav.jsx'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: '1',
            search: '',
            searchBy: '1',
            searchIsActive: false
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    searchIsActiveToggle = (value) => {
        this.setState({
            searchIsActive: value,
            search: '',
            searchBy: '1'
        })
    }

    filterData = (titles, users) => {
        if (this.state.search === '') {
            return titles
        } else {
            let filteredData
            switch (this.state.searchBy) {
                case '1':
                    filteredData = titles.filter(title => title.name.toLowerCase().includes(this.state.search.toLowerCase()))
                    break;
                case '2':
                    filteredData = titles.filter(title => title.body.toLowerCase().includes(this.state.search.toLowerCase()))
                    break;
                case '3':
                    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(this.state.search.toLowerCase()))
                    const filteredUsersIdArrray = filteredUsers.map(filteredUser => filteredUser.id)
                    filteredData = titles.filter(title => filteredUsersIdArrray.includes(title.userId))
                    break;
                default:
                    filteredData = titles.filter(title => title.name.toLowerCase().includes(this.state.search.toLowerCase()))
                    break;
            }
            return filteredData
        }
    }

    render() {
        const { handleChange, handleEditTitle, handleAddTitle, handleRemoveTitle, acitvieAddNewTitle, state } = this.props
        const { data, newTitleIsActive, loggedUserId } = this.props.state
        const titles = [...data.titles]
        const users = [...data.users]
        const filteredData = this.filterData(titles, users)
        switch (this.state.sort) {
            case '1':
                filteredData.sort((a, b) => {
                    const c = new Date(a.date)
                    const d = new Date(b.date)
                    return c - d
                })
                break;
            case '2':
                filteredData.sort((a, b) => {
                    const c = new Date(a.date)
                    const d = new Date(b.date)
                    return d - c
                })
                break;
            case '3':
                filteredData.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case '4':
                filteredData.sort((a, b) => b.name.localeCompare(a.name))
                break;
            default:
                filteredData.sort((a, b) => {
                    const c = new Date(a.date)
                    const d = new Date(b.date)
                    return c - d
                })
        }
        const titleList = filteredData.map(title => <Titles key={title.id} handleEditTitle={handleEditTitle} handleRemoveTitle={handleRemoveTitle} title={title} state={this.props.state} />)
        return (
            <section>
                <Nav handleChange={this.handleChange} searchValue={this.state.search} searchIsActiveToggle={this.searchIsActiveToggle} searchIsActive={this.state.searchIsActive} loggedUserId={loggedUserId} newIsActive={newTitleIsActive} acitvieAddNewTitle={acitvieAddNewTitle} />
                {loggedUserId && newTitleIsActive ? <AddNewTitle state={state} handleChange={handleChange} handleSubmit={handleAddTitle} acitvieAddNewTitle={acitvieAddNewTitle} /> : null}
                {titleList}
            </section >
        )
    }
}

export default Board