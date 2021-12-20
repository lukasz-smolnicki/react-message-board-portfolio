import React from 'react'

const Post = (props) => {
    const { post } = props
    return (
        <article>
            <p>{post.body}</p>
        </article>
    )
}

export default Post