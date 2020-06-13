import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggle} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button
