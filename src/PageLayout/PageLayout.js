import React, { Fragment } from 'react'
import Sidebar from './SidebarNav/Sidebar'


export default function PageLayout({ children }) {
    return (
        <Fragment>
            <Sidebar />
            {children}
        </Fragment>
    )
}
