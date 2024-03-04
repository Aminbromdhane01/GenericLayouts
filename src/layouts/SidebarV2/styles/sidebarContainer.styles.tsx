import { Button } from '@mui/material';
import { styled } from '@mui/system';

const SidebarContainer = styled('aside')(({ theme }: any) => ({
    position: 'absolute',
    overflow: 'hidden',

    width: '5%',
    height: '100%',
    background: '#29277a',
    transition: `width 400ms`,

    '&.open': {
        width: '16%',
    },
}));

export default SidebarContainer