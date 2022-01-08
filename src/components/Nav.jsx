import React from 'react'

const Nav = (props) => {
    const { acitvieAddNewTitle } = props
    return (
        <ul className='nav nav-pills'>
            <li className='nav-item mt-2 me-auto'>
                <button className='btn btn-secondary' onClick={() => acitvieAddNewTitle(true)}>Add thread</button>
            </li>
            <li className='nav-item mt-2 me-2'>
                <select className='form-select' aria-label='Default select example'>
                    <option value='1'>Sort from newst to oldest</option>
                    <option value='2'>Sort from oldest to newest</option>
                    <option value='3'>Sort from A to Z</option>
                    <option value='4'>Sort from Z to A</option>
                </select>
            </li>
            <li className='nav-item mt-2'>
                <form className="form-inline">
                    <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
                </form>
            </li>

        </ul>
    )
}

export default Nav