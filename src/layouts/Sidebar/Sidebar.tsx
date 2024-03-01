import React from 'react';
import List from '@mui/material/List';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'; import SideBarItem from './SideBarItem';
import HomeIcon from '@mui/icons-material/Home';
import SideBarContainer from './styles/sidebarContainer.style';
const Sidebar = () => {
    return (
        <SideBarContainer >
            <nav aria-label="main mailbox folders">
                <List>
                    <SideBarItem content='Home' icon={<HomeIcon />} />
                    <SideBarItem content='MyBooks' icon={<LocalLibraryIcon />} />
                </List>
            </nav>
        </SideBarContainer>
    );
};

export default Sidebar;
