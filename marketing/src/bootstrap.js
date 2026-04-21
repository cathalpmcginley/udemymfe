import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

console.log('Hi there');

const mount = (el) => {
    if (el) {
        ReactDOM.render(
            <App />,
            el
        )
    }
}
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#local-sandbox-marketing')
    if (el) {
        mount(el)
    }

}

export { mount }
