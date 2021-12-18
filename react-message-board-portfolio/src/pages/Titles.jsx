import React from 'react'
import Title from '../components/Title.jsx'

const Board = (props) => {
    const { data } = props
    const titles = data.titles.map(title => <Title key={title.id} title={title} />)
    return (
        <ul>
            {titles}
        </ul>
    )
}

export default Board;