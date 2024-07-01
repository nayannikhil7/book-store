import Sidebarr from './Sidebarr'
import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div>
            <Sidebarr />
            <Outlet />
        </div>
    )
}

export default DashboardLayout