import React from 'react'
import Titles from '../components/Titles.jsx'

const Board = (props) => {
    const { data } = props
    const titles = data.titles.map(title => <Titles key={title.id} title={title} />)
    return (
        <section>
            <ul>
                {titles}
            </ul>
        </section>
    )
}

export default Board