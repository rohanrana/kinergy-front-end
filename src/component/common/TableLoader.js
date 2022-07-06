import React from 'react'
import { Spinner } from "react-bootstrap"
export default function TableLoader() {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}
