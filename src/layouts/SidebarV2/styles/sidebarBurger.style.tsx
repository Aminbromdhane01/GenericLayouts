import { Button } from "@mui/material";
import { styled } from "@mui/system";


const SidebarBurger = styled(Button)(({ theme }) => ({
    width: 60,
    height: 72,
    display: 'grid',
    placeItems: 'center',
    color: '#f9f9f9',
    background: 'transparent',
    cursor: 'pointer',
}));

export default SidebarBurger