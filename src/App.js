import React, {useState} from "react"


// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

const App = () => {
    const [ count, setCount ] = useState(0)
    return (
            <div>
                <h1>{ count }</h1>
                <button onClick={() =>setCount(count+1)}>Increase</button>
                <br></br>
                <button onClick={() =>setCount(count-1)}>Decrease</button>
            </div>        
    )
}

export default App
