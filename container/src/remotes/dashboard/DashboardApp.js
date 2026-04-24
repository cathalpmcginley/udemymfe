import React, { useEffect, useRef } from "react"
import { mount } from 'dashboard/Dashboard'


export default () => {

    const dashboardMountPoint = useRef(null)

    useEffect(() => {
        if (dashboardMountPoint.current) {
            mount(dashboardMountPoint.current)
        }
    }, [])

    return (
        <div ref={dashboardMountPoint}></div>
    )
}