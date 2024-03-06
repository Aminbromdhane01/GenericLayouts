import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-books-with-copy-space_23-2148827187.jpg")',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.9)'

}));

export default Container