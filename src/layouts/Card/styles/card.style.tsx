import { Card, styled } from "@mui/material";

interface StyledCardProps {
  isHovered: boolean;
}
const BookCard = styled(Card)<StyledCardProps>(({ theme, isHovered }) => ({
  maxWidth: 400,
  width: '100%',
  boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  cursor: isHovered ? 'pointer' : 'pointer',
}));

export default BookCard;