import React from 'react'
import Button from './Button.jsx'

const PostButtons = (props) => {
    const { toggleEdit, handleRemovePost, id } = props
    return (
        <>
            <Button action={toggleEdit} value={true} name='Edit post' />
            <Button action={handleRemovePost} value={id} name='Remove post' />
        </>
    )
}

const EditPostButtons = (props) => {
    const { toggleEdit, value, handleEditPost, id } = props
    return (
        <>
            <Button action={toggleEdit} value={false} name='Cancel' />
            <button onClick={() => { handleEditPost(id, value); toggleEdit(false) }}>Apply</button>
            {/* <Button action={handleEditPost} value={id} name='Apply' /> */}
        </>
    )
}

export { PostButtons, EditPostButtons } 