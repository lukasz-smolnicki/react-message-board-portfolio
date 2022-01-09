import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
    const { newIsActive, searchValue, searchIsActive, searchIsActiveToggle, acitvieAddNewTitle, handleChange, loggedUserId } = props
    return (
        <ul className='nav nav-pills'>
            <li className='nav-item me-auto mt-2'>
                {loggedUserId !== false ? newIsActive ? <button className='btn btn-secondary' onClick={() => acitvieAddNewTitle(false)}>Cancel</button> : <button className='btn btn-secondary' onClick={() => acitvieAddNewTitle(true)}>Add thread</button> : null}
            </li>
            <li className='nav-item mt-2 me-2'>
                <select name='sort' defaultValue={'1'} className='form-select' onChange={handleChange}>
                    <option value='1'>Sort from newest to oldest</option>
                    <option value='2'>Sort from oldest to newest</option>
                    <option value='3'>Sort from A to Z</option>
                    <option value='4'>Sort from Z to A</option>
                </select>
            </li>
            {searchIsActive ? <NavSearchForm handleChange={handleChange} searchValue={searchValue} searchIsActiveToggle={searchIsActiveToggle} /> : <NavSearchButton searchIsActiveToggle={searchIsActiveToggle} />}
        </ul>
    )
}

const NavSearchButton = (props) => {
    const { searchIsActiveToggle } = props
    return (
        <li className='nav-item mt-2'>
            <button className='btn btn-secondary' onClick={() => searchIsActiveToggle(true)}><FontAwesomeIcon icon={faSearch} /></button>
        </li>
    )
}

const NavSearchForm = (props) => {
    const { handleChange, searchValue, searchIsActiveToggle } = props
    return (
        <>
            <li className='nav-item mt-2 me-2'>
                <form >
                    <input name='search' value={searchValue} className='form-control' type='search' placeholder='Search' onChange={handleChange} />
                </form>
            </li>
            <li className='nav-item mt-2 me-2'>
                <select name='searchBy' defaultValue={'1'} className='form-select' onChange={handleChange}>
                    <option value='1'>By title</option>
                    <option value='2'>By post</option>
                    <option value='3'>By author</option>
                </select>
            </li>
            <li className='nav-item mt-2'>
                <button className='btn btn-secondary' onClick={() => searchIsActiveToggle(false)}><FontAwesomeIcon icon={faTimes} /></button>
            </li>
        </>
    )
}

export default Nav