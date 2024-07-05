import Sidebarr from './Sidebarr'
import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className='flex gap-4 flex-col md:flex-row'>
            <Sidebarr />
            <Outlet />
        </div>
    )
}

export default DashboardLayout