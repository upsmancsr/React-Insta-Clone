import React from 'react';
import GlyphLogo from '../../instagram_assets/glyph-logo.png';
import './SearchBar.css';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    
`;

const SearchBar = props => {
    return (

        <div className='search-bar-container'>
            <div className='camera-logo'>
                <img src={GlyphLogo} />
            </div>
            <div className='search-form'>
                <input type='text' placeholder='Search' onKeyDown={props.searchForPosts} />
            </div>
        </div>
    );
}

export default SearchBar;