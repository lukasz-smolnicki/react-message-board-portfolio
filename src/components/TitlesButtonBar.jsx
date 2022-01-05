import React from 'react'
import Button from './Button.jsx'

const TitlesButtonBar = (props) => {
    const { handleRemoveTitle } = props
    const id = props.title.id
    return (
        <>
            <Button action={handleRemoveTitle} value={id} name='Delete title' />
        </>
    )
}

export default TitlesButtonBar