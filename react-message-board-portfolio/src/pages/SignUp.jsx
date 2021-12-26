import React from 'react'

const SignUp = (props) => {
  const { handleSubmit, handleChange } = props
  const { name, password, email } = props.state

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input name='name' vaule={name} type='text' autoComplete='off' placeholder='Name' onChange={handleChange} />
        <input name='email' vaule={email} type='email' autoComplete='off' placeholder='Email' onChange={handleChange} />
        <input name='password' vaule={password} type='password' autoComplete='off' placeholder='Password' onChange={handleChange} />
        <button>Sign In</button>
      </form>
    </section>
  )
}

export default SignUp