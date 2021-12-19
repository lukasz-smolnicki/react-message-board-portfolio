import React from 'react'
import Title from '../components/Title.jsx'

const Titles = (props) => {
    const { data } = props
    const title = data.titles.map(title => <Title key={title.id} title={title} />)
    return (
        <section>
            <ul>
                {title}
            </ul>
        </section>
    )
}

export default Titles;