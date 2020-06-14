import React, {useState} from "react"


const App = () => {
    const [ count, setCount ] = useState(0)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    function deccrement(){
        setCount(prevCount => prevCount - 1)
    }

    return (
            <div>
                <h1>{ count }</h1>
                <button onClick={increment}>Increase</button>
                <br></br>
                <button onClick={deccrement}>Decrease</button>
            </div>        
    )
}

export default App
