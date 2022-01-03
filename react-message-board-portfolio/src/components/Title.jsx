import React from 'react'
import Post from './Post.jsx'
import { useParams } from 'react-router-dom'

const Title = (props) => {
    const { state, handleRemovePost } = props
    const { data } = props.state
    let params = useParams()
    const posts = data.posts.filter(post => post.titleId === parseInt(params.id))
    const title = data.titles.find(title => title.id === parseInt(params.id))
    const postsList = posts.map(post => <Post key={post.id} handleRemovePost={handleRemovePost} post={post} state={state} />)
    console.log(title)
    return (
        <section>
            <p>{title.name}</p>
            <p>{title.body}</p>
            {postsList}
        </section>
    )
}

export default Title