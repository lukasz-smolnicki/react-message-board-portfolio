import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TitlesButtonBar = (props) => {
    const { handleRemoveTitle } = props
    const id = props.title.id
    return (
        <>
            <button className='btn' onClick={() => handleRemoveTitle(id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            <button className='btn' onClick={() => handleRemoveTitle(id)}><FontAwesomeIcon icon={faEdit} /></button>
            {/* <button className='btn' action={handleRemoveTitle} value={id} name='Delete title' ><FontAwesomeIcon icon={faEdit} /></button> */}
        </>
    )
}

export default TitlesButtonBar