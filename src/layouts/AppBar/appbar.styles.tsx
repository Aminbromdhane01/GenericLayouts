'use client'
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const StyledAppBarTitle = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },

}));

export default StyledAppBarTitle;
