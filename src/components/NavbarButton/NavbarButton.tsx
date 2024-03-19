import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';

const NavbarButton = styled(Box)(({ theme }) => ({
    padding: '5px 20px',
    borderRadius: '50px',
    '&:hover': {
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
    },
}));

export default NavbarButton

