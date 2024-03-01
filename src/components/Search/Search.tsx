import React from 'react';
import SearchWrapper from './SearchWrapper';
import SearchIconWrapper from './SearchIconWrapper';
import StyledInputBase from './StyledInputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => (
    <SearchWrapper>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </SearchWrapper>
);

export default Search;