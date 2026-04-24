import React, { lazy, Suspense, useEffect, useState, useRef } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Progress from './components/Progress'
import { createGenerateClassName, StylesProvider } from "@material-ui/core"


const AuthApp = lazy(() => import('./remotes/auth/AuthApp'))
const MarketingApp = lazy(() => import('./remotes/marketing/MarketingApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <div>
                        isSignedIn = {isSignedIn ? 'yes' : 'no'}
                    </div>
                    <Suspense  fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onAuthChange={() => setIsSignedIn(true)}/>
                            </Route>
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}