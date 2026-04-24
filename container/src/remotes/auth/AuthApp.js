import React, { useEffect, useRef } from "react"
import { mount } from 'auth/Auth'
import { useHistory } from "react-router-dom"


export default ({onAuthChange}) => {

    const authMountPoint = useRef(null)
    const history = useHistory()

    useEffect(() => {
        if (authMountPoint.current) {

            const { onParentNavigate } = mount(authMountPoint.current, {
                initialPath: history.location.pathname,
                onNavigate: ({ pathname: newPathname }) => {
                    const { pathname } = history.location
                    if (pathname !== newPathname) {
                        history.push(newPathname)
                    }
                },
                onAuthChange: (isLogin, success) => {
                    if (isLogin && success) {
                        console.log("Container :: AuthApp remote wrapper :: user signed in")
                        onAuthChange()
                    }

                }
            })
            if (onParentNavigate) {
                history.listen(onParentNavigate)
            }
        }
    }, [])

    return (
        <div ref={authMountPoint}></div>
    )
}