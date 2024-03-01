import { Grid } from "@mui/material";
import { styled } from '@mui/system';

interface Layout {
    LeftLayout: React.ReactNode
    RightLayout: React.ReactNode
}
const StyledGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },

})
)

const PageLayout = ({ LeftLayout, RightLayout }: Layout) => {
    return (
        <Grid container>
            <StyledGrid item xs={12} sm={2} md={2} lg={2}>
                {LeftLayout}
            </StyledGrid>
            <Grid item container xs={12} sm={10} md={10} lg={10} spacing={2} pt={1}>
                {RightLayout}
            </Grid>
        </Grid>
    );
};

export default PageLayout