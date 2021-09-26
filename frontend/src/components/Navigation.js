import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useLocation, Link } from "react-router-dom"

export default function Navigation() {
    const location = useLocation()

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <Link to="/" className={`${location.pathname === ('/') && 'active'} nav-link`} style={{color: 'rgb(232, 230, 227)'}}>Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/about" className="nav-link">
                        about
                    </Link>
                    <Link to="/login" className="nav-link">
                        login
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
