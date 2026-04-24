import React, { lazy, Suspense, useEffect, useState, useRef } from "react"
import { Redirect, Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Progress from './components/Progress'
import { createGenerateClassName, StylesProvider } from "@material-ui/core"
import { createBrowserHistory} from 'history'


const AuthApp = lazy(() => import('./remotes/auth/AuthApp'))
const MarketingApp = lazy(() => import('./remotes/marketing/MarketingApp'))
const DashboardApp = lazy(() => import('./remotes/dashboard/DashboardApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory()

export default () => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard')
        }
    }, [isSignedIn])

    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <div>
                    <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onAuthChange={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/" />}
                            <DashboardApp />
                            </Route>
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </StylesProvider>
    )
}