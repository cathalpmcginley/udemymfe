import React, { useEffect, useRef } from "react"
import { mount } from 'marketing/Marketing'


export default () => {

    const marketingMountPoint = useRef(null)

    useEffect(() => {
        if (marketingMountPoint.current) {
            mount(marketingMountPoint.current)
        }
    }, [marketingMountPoint])

    return (
        <div ref={marketingMountPoint}></div>
    )
}