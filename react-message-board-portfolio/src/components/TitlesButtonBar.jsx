import React from 'react'

const TitlesButtonBar = (props) => {
    const { handleRemoveTitle } = props
    const id = props.title.id
    return (
        <>
            <button onClick={() => handleRemoveTitle(id)}>Remove post</button>
        </>
    )
}

export default TitlesButtonBar