import NavbarButton from '@/components/NavbarButton/NavbarButton'
import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'


const FieldAppbar = () => {
    return (
        <Box >
            <AppBar sx={{ position: 'static', }}>
                <Box display={'flex '} justifyContent={'space-around'} alignItems={'center'} height={'50px'}>
                    <NavbarButton borderRadius={'50px'}   ><Typography variant='body1' >Horror 2</Typography> </NavbarButton>
                    <NavbarButton borderRadius={'50px'}   ><Typography variant='body1' >Horror 2</Typography> </NavbarButton>
                    <NavbarButton borderRadius={'50px'}   ><Typography variant='body1' >Horror 2</Typography> </NavbarButton>
                    <NavbarButton borderRadius={'50px'}   ><Typography variant='body1' >Horror 2</Typography> </NavbarButton>


                </Box>

            </AppBar>

        </Box>
    )
}

export default FieldAppbar