import React from 'react'

const Nav = (props) => {
    const { newTitleIsActive, acitvieAddNewTitle, handleChange, loggedUserId } = props
    return (
        <ul className='nav nav-pills'>
            <li className='nav-item me-auto mt-2'>
                {loggedUserId !== false ? newTitleIsActive ? <button className='btn btn-secondary' onClick={() => acitvieAddNewTitle(false)}>Cancel</button> : <button className='btn btn-secondary' onClick={() => acitvieAddNewTitle(true)}>Add thread</button> : null}
            </li>
            <li className='nav-item mt-2 me-2'>
                <select name='sort' defaultValue={'1'} className='form-select' onChange={handleChange}>
                    <option value='1'>Sort from newest to oldest</option>
                    <option value='2'>Sort from oldest to newest</option>
                    <option value='3'>Sort from A to Z</option>
                    <option value='4'>Sort from Z to A</option>
                </select>
            </li>
            <li className='nav-item mt-2'>
                <form className='form-inline'>
                    <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                </form>
            </li>

        </ul>
    )
}

export default Nav