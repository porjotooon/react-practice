import React, {Component} from "react"
import Toggler from "./Toggler"

function Menu(props) {
    return (
        <Toggler render={
            (on, toggle) =>(
                    <div>
                        <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
                        <nav style={{display: on ? "block" : "none"}}>
                            <h4>Signed in as Coder123</h4>
                            <p>Your Profile</p>
                            <p>Your Repositories</p>
                            <p>Your Stars</p>
                            <p>Your Gists</p>
                        </nav>
                    </div>
                )
        }/>
    )
        
}

export default Menu