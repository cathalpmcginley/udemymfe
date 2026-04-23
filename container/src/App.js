import React, { useEffect, useRef } from "react"
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import MarketingApp from "./remotes/marketing/MarketingApp"
import { createGenerateClassName, StylesProvider } from "@material-ui/core"

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}