import React from 'react'
import "../../../src/sidebar.css"

const SideBarContainer = (props) => {
    return (
        <div id="sidebar">
            <ul>
                <li className="roll">
                    <a href="" title="plateforme" >Plateforme</a>
                
                <ul className="submenu">
                    <li><a href="PC" title="PC">PC</a></li>
                    <li><a href="PS4" title="PS4">Playstation 4</a></li>
                    <li><a href="PS5" title="PS5">Playstation 5</a></li>
                        <li><a href="" title="Xbox">Xbox</a></li>
                    <li><a href="" title="XboxSeries">Xbox series X|S</a></li>
                </ul>
                </li>
            </ul>
            <ul>
                <li className="roll">
                    <a href="" title="genre" >Genre</a>
                
                <ul className="submenu">
                    <li><a href="" title="aventure">Aventure</a></li>
                    <li><a href="" title="rpg">RPG</a></li>
                    <li><a href="" title="fps">FPS</a></li>
                        <li><a href="" title="horreur">Horreur</a></li>
                        <li><a href="" title="survie">Survie</a></li>
                        <li><a href="" title="str">STR</a></li>
                </ul>
                </li>
            </ul>
        </div>
    )
}

export default SideBarContainer
