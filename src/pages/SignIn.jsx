import React from 'react'

const SignIn = (props) => {
    const { handleSignIn, handleChange } = props
    const { name, password } = props.state

    return (
        <section>
            <form onSubmit={handleSignIn}>
                <input name='name' value={name} type='text' autoComplete='off' placeholder='Name' onChange={handleChange} />
                <input name='password' value={password} type='password' autoComplete='off' placeholder='Password' onChange={handleChange} />
                <button>Sign In</button>
            </form>
        </section>
    )
}

export default SignIn