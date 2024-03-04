import { Button } from "@mui/material";
import { styled } from "@mui/system";

const SidebarButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 56,
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: 16,
    textTransform: 'capitalize',
    lineHeight: 1,
    padding: '0 10px',
    borderRadius: 8,
    color: '#f9f9f9',
    opacity: 0.8,

    '&:hover': {
        //background: theme.palette.grey[900],
        opacity: 1,
    },
}));

export default SidebarButton