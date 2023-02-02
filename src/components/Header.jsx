import React from 'react'
import Nav from './Nav.jsx'
import Nets from './Nets.jsx'
import "../../src/header.css"

const Header = (props) => {
    console.log(props)
    const {searchValue,searchSetValue} = props
    return (
        <div id="header">
            <Nav searchValue={searchValue} searchSetValue={searchSetValue} />
            <Nets />
        </div>
    )
}

export default Header
