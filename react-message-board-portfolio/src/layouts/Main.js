const Main = (props) => {
    const { error, isLoaded, data } = props
    if (error) {
        return <p>ERROR: Something's going wrong</p>
    } else if (!isLoaded) {
        return <p>loading</p>
    } else {
        console.log(data.counter.userId)
        return (
            <p> ok</p >
        )
    }
}

export default Main;