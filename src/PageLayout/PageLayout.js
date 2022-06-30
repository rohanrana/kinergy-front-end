import React, { Fragment } from 'react'
import Header from '../Components/Header/Header'

export default function PageLayout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}

        </Fragment>

    )
}
