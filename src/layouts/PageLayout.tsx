import { Button, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/system';

interface Layout {
    LeftLayout?: React.ReactNode
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
        <Paper elevation={2} style={{ margin: '60px 40px 40px 40px', padding: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px , solid', flexDirection: 'column' }} >
            <Typography variant="h4" fontFamily={'bold'} marginBottom={4}>Most Popular Books</Typography>
            <Grid container justifyContent={'space-around'} >

                <Grid item container xs={12} sm={10} md={10} lg={10} spacing={4} >
                    {RightLayout}
                </Grid>
            </Grid>

        </Paper>
    );
};

export default PageLayout