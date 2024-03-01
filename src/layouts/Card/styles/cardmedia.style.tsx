import { CardMedia } from '@mui/material';
import { styled } from '@mui/system';
interface StyledCardMediaProps {
    isHovered: boolean;
}

const StyledCardMedia = styled(CardMedia)<StyledCardMediaProps>(({ theme, isHovered }) => ({
    height: 240,
    borderRadius: isHovered ? '8px' : '4px',
    transition: 'border-radius 0.3s ease-in-out',
}));
export default StyledCardMedia;
