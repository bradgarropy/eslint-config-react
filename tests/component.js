import {useState, useEffect} from "react"

const Component = props => {
    const [count, setCount] = useState()

    useEffect(() => {
        setCount(count + 1)
    }, [])

    return (
        <div>
            <h1>react</h1>
        </div>
    )
}

Component.propTypes = {}

export default Component
