import React from 'react'

const SignIn = (props) => {
    const { handleSubmit, handleChange } = props
    const { name, password } = props.state

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input name='name' vaule={name} type='text' autoComplete='off' placeholder='Name' onChange={handleChange} />
                <input name='password' vaule={password} type='password' autoComplete='off' placeholder='Password' onChange={handleChange} />
                <button>Sign In</button>
            </form>
        </section>
    )
}

export default SignIn