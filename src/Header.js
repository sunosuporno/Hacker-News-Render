import React from 'react';
import logo from './logo.png';
import Nav from './Nav'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="ycombinator logo" />
            <h1>Hacker News</h1>
            <Nav>
                <a href = "#">New</a>
                <a href = "#">Past</a>
                <a href = "#">Comments</a>
                <a href = "#">Ask</a>
                <a href = "#">Show</a>
                <a href = "#">Jobs</a>
                <a href = "#">Submit</a>
            </Nav>
            <h6>login</h6>
        </div>

    )
}

export default Header