import React from 'react'
import Post from './Post.jsx'
import { useParams } from 'react-router-dom'

const Title = (props) => {
    const { state, handleAddPost, handleRemovePost, handleEditPost, handleChange } = props
    const { data, loggedUserId, post } = state
    const params = useParams()
    const posts = data.posts.filter(post => post.titleId === parseInt(params.id))
    const title = data.titles.find(title => title.id === parseInt(params.id))
    const postsList = posts.map(post => <Post key={post.id} handleChange={handleChange} handleEditPost={handleEditPost} handleRemovePost={handleRemovePost} post={post} state={state} />)
    return (
        <section>
            <p>{title.name}</p>
            <p>{title.body}</p>
            {postsList}
            {loggedUserId ?
                <form onSubmit={(event) => handleAddPost(event, parseInt(params.id))}>
                    <input name='post' value={post} type='text' autoComplete='off' placeholder={'Post message'} onChange={handleChange} />
                    <button>Add new post</button>
                </form> : null
            }
        </section >
    )
}

export default Title