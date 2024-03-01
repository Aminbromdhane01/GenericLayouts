import { CardActions } from "@mui/material";
import { styled } from '@mui/system';

const StyledCardActions = styled(CardActions)(({ theme }) => ({
    justifyContent: 'space-between',
    borderTop: '1px solid #e0e0e0',
    paddingTop: '8px',
}));

export default StyledCardActions