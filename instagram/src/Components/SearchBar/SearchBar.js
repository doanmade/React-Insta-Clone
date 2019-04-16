import React from 'react';
import './styles.css';
import IGLogo from '../img/instagram.png';
import IGRight from '../img/instagram-right.png';

const SearchBar = () => {

    return (
        <div className="searchBar">
            <div><img src={IGLogo} alt="iglogo" /></div>
            <input type="text" className="search" placeholder="search" />
            <div>
            <img src={IGRight} alt="igright" />
            </div>
        </div>

    )
} 


export default SearchBar;