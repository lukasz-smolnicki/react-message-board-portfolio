import React from 'react'
import Button from '../components/Button.jsx'

const AddNewTitle = (props) => {
    const { acitvieAddNewTitle } = props

    return (
        <section>
            <p>aaaa</p>
            <Button action={acitvieAddNewTitle} value={false} name='Cancel' />
        </section>
    )
}

export default AddNewTitle