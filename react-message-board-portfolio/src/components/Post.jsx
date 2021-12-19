import React from 'react'

const Post = (props) => {
    const { post } = props
    console.log(post)
    return (
        <article>
            <p>{post.body}</p>
        </article>
    )
}

export default Post