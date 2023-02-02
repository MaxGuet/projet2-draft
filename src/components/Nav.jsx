import React from 'react'

const Nav = (props) => {
    const { searchValue, searchSetValue } = props
    console.log(searchValue)
    return (
        <ul id="navlist">
            <input type="text" value={searchValue} onChange={(e) => {searchSetValue(e.target.value)}} />
        </ul>
    )
}

export default Nav
