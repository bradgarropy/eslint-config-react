import {useState, useEffect} from "react"

const Component = props => {
    const [count, setCount] = useState()

    useEffect(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <h1>react</h1>
            <p>🔥</p>
        </div>
    )
}

Component.propTypes = {}

export default Component
