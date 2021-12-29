import React from 'react'
import Titles from '../components/Titles.jsx'

const Board = (props) => {
    const { handleRemoveTitle } = props
    const { data } = props.state
    const titles = data.titles.map(title => <Titles key={title.id} handleRemoveTitle={handleRemoveTitle} title={title} state={props.state} />)
    return (
        <section>
            <ul>
                {titles}
            </ul>
        </section>
    )
}

export default Board