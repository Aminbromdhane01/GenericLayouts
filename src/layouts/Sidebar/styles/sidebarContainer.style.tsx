import { Box, Theme } from '@mui/material';
import { styled } from '@mui/system';

const SideBarContainer = styled(Box)(({ theme }) => ({
    width: '95%',
    backgroundColor: '#fff',
    color: '#333',
    minHeight: '100vh',
    marginTop: 1,
    marginRight: 2
}
))

export default SideBarContainer