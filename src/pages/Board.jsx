import React from 'react'
import Titles from '../components/Titles.jsx'
import Button from '../components/Button.jsx'
import AddNewTitle from './AddNewTitle.jsx'

const Board = (props) => {
    const { handleChange, handleEditTitle, handleAddTitle, handleRemoveTitle, acitvieAddNewTitle, state } = props
    const { data, newTitleIsActive, loggedUserId } = props.state
    const titles = data.titles.map(title => <Titles key={title.id} handleEditTitle={handleEditTitle} handleRemoveTitle={handleRemoveTitle} title={title} state={props.state} />)
    return (
        <section>
            {loggedUserId ? newTitleIsActive ? <AddNewTitle state={state} handleChange={handleChange} handleSubmit={handleAddTitle} acitvieAddNewTitle={acitvieAddNewTitle} /> : <Button action={acitvieAddNewTitle} value={true} name='Add new title' /> : null}
            {titles}
        </section>
    )
}

export default Board