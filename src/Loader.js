import React from 'react'
import './Loader.css'

const Loader = (props) => {
    return (
        <div class="ui segment">
            <div class="ui active inverted dimmer">
                <div class="ui text loader">{props.message}</div>
            </div>
            <p></p>
            </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}

//default props 만들기
export default Loader;
