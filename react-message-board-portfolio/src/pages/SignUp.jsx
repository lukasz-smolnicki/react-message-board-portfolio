import React from 'react'

const SignUp = (props) => {
  const { handleSignUp, handleChange } = props
  const { name, password, email } = props.state

  return (
    <section>
      <form onSubmit={handleSignUp}>
        <input name='name' value={name} type='text' autoComplete='off' placeholder='Name' onChange={handleChange} />
        <input name='email' value={email} type='email' autoComplete='off' placeholder='Email' onChange={handleChange} />
        <input name='password' value={password} type='password' autoComplete='off' placeholder='Password' onChange={handleChange} />
        <button>Sign Up</button>
      </form>
    </section>
  )
}

export default SignUp