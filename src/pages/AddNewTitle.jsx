import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const AddNewTitle = (props) => {
    const { handleSubmit, handleChange, acitvieAddNewTitle } = props
    const { title, post } = props.state

    return (
        <div className='card bg-light my-3'>
            <form onSubmit={handleSubmit}>
                <div className='card-header'>
                    <div className='card-title'>
                        <input name='name' className='form-control' vaule={title} type='text' autoComplete='off' placeholder='Title' onChange={handleChange} />
                    </div>
                </div>
                <div className='card-body'>
                    <textarea name='body' className='form-control' vaule={post} type='textarea' autoComplete='off' placeholder='Post message' onChange={handleChange} />
                </div>
                <div className='card-footer py-0 text-muted d-flex'>
                    <div className='ms-auto py-2 d-flex align-items-center'>
                        <span>Do you want to add new thread?</span>
                        <button type='button' className='btn text-danger' onClick={() => acitvieAddNewTitle(false)}><FontAwesomeIcon icon={faTimes} /></button>
                        <button type='submit' className='btn text-success' ><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNewTitle