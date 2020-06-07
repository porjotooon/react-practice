import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState(prevState => {
            return{
            on: !prevState.on
            }
        })
    }

    render() {
        const ChargedComponent = this.props.component
        return (
            <ChargedComponent on={this.state.on} toggle={this.toggle} {...this.props}/>
        )
    }
}


export function withToggler(component){
    return function(props){
        return (
            <Toggler component={component} {...props}/>
        )
    }
}