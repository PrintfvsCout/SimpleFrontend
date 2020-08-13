import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'


function Header()
{
    return (
        <header className="border-b-2 p-3 flex justify-between items-center">
            <span className="font-bold">
                <Link to="/">
                Freelancer app
                </Link>
            </span>
            
            <Navigation />
        </header>
    )

}

export default Header