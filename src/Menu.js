import React, {Component} from "react"
import {withToggler} from "./HOCs/withToggler"

class Menu extends Component {    
    render() {
        return (
            <div>
                <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{display: this.props.on ? "block" : "none"}}>
                    <h4>Signed in as Coder123</h4>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        ) 
    }
}

const SuperchargedMenuComponent = withToggler(Menu)
export default SuperchargedMenuComponent