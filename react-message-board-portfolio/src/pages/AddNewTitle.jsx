import React from 'react'
import Button from '../components/Button.jsx'

const AddNewTitle = (props) => {
    const { handleSubmit, handleChange, acitvieAddNewTitle } = props
    const { title, post } = props.state

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input name='title' vaule={title} type='text' autoComplete='off' placeholder='Title' onChange={handleChange} />
                <input name='post' vaule={post} type='textarea' autoComplete='off' placeholder='Post' onChange={handleChange} />
                <button>Add new title</button>
            </form>
            <Button action={acitvieAddNewTitle} value={false} name='Cancel' />
        </section>
    )
}

export default AddNewTitle