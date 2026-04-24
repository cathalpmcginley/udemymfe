import React from 'react'

import { Switch, Route, Router } from 'react-router-dom'
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles'

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({ history, onAuthChange }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/auth/signin">
                            <Signin onAuthChange={onAuthChange} />
                        </Route>
                        <Route exact path="/auth/signup">
                            <Signup onAuthChange={onAuthChange} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}