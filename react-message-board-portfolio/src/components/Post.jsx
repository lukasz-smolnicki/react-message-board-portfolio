import React from 'react'
import { PostButtons, EditPostButtons } from './PostButtonBar.jsx'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            posts: '',
        }
    }

    toggleEdit = (value) => {
        this.setState({
            isEdit: value
        })
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        const { post, handleRemovePost, handleEditPost } = this.props
        const { loggedUserId } = this.props.state
        const { users } = this.props.state.data
        const user = users.find(user => post.userId === user.id)
        if (this.state.isEdit && loggedUserId) {
            return (
                <article>
                    <form>
                        <input name='post' vaule={post.body} type='text' autoComplete='off' placeholder={post.body} onChange={this.handleChange} />
                    </form>
                    {loggedUserId && loggedUserId === user.id ? <EditPostButtons handleEditPost={handleEditPost} value={this.state.post} id={post.id} toggleEdit={this.toggleEdit} /> : null}
                </article>
            )
        } else {
            return (
                <article>
                    <p>{post.body}</p>
                    {loggedUserId && loggedUserId === user.id ? <PostButtons handleRemovePost={handleRemovePost} id={post.id} toggleEdit={this.toggleEdit} /> : null}
                </article>
            )
        }

    }
}

export default Post

// class Post extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isEdit: false
//         }
//     }
//     toggleEdit = () => {
//         this.setState({
//             isEdit: !this.state.isEdit
//         })
//     }
//     render() {
//         const { post } = this.props

//         return (

//         )
//     }
// }

// export default Post