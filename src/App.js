import React from "react"
import Header from './components/Header'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default App