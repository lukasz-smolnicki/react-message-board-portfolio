import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const TitleButtons = (props) => {
    const { handleRemoveTitle, toggleEdit, toggleDelete, toggleDeleteState, id } = props
    if (!toggleDeleteState) {
        return (
            <>
                <button className='btn' onClick={() => toggleDelete(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                <button className='btn' onClick={() => toggleEdit(true)}><FontAwesomeIcon icon={faEdit} /></button>
            </>
        )
    } else {
        return (
            <>
                <span>Do you want to delete post?</span>
                <button className='btn text-danger' onClick={() => toggleDelete(false)}><FontAwesomeIcon icon={faTimes} /></button>
                <button className='btn text-success' onClick={() => handleRemoveTitle(id)}><FontAwesomeIcon icon={faCheck} /></button>
            </>
        )
    }
}

const TitleConfirmEdit = (props) => {
    const { toggleEdit, handleEditTitle, id, name, body } = props
    return (
        <>
            <button className='btn text-danger' onClick={() => toggleEdit(false)}><FontAwesomeIcon icon={faTimes} /></button>
            <button className='btn text-success' onClick={() => {
                handleEditTitle(id, name, body)
                toggleEdit(false)
            }
            }><FontAwesomeIcon icon={faCheck} /></button>
        </>
    )
}

export { TitleButtons, TitleConfirmEdit }