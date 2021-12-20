import React from 'react'
import Post from './Post.jsx'
import { useParams } from 'react-router-dom'

const Title = (props) => {
    const { data } = props
    let params = useParams()
    const posts = data.posts.filter(post => post.titleId === parseInt(params.id))
    const postsList = posts.map(post => <Post key={post.id} post={post} />)
    return (
        <section>{postsList}</section>
    )
}

export default Title