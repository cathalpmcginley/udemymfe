import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory, createMemoryHistory } from 'history'

import App from './App'


const mount = (el, { defaultHistory, onNavigate, initialPath, onAuthChange }) => {
    if (el) {
        const history = defaultHistory || createMemoryHistory({
            initialEntries: [initialPath]
        })
        if (onNavigate) {
            history.listen(onNavigate)
        }

        ReactDOM.render(
            <App onAuthChange={onAuthChange} history={history} />,
            el
        )

        return {
            onParentNavigate({ pathname: newPathname }) {
                console.log("I am the auth app :: parent is navigating", location)
                const { pathname } = history.location
                if (pathname !== newPathname) {
                    history.push(newPathname)
                }
            }
        }
    }
}
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#local-sandbox-auth')
    if (el) {
        mount(el, { defaultHistory: createBrowserHistory() })
    }

}

export { mount }
