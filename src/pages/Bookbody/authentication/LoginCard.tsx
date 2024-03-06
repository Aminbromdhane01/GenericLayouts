'use client'
import Input from "@/layouts/Input/Input"
import { Box, Grid, IconButton, InputAdornment, Typography } from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginOptions from "./LoginOptions";
import ActionButton from "@/layouts/Button/ActionButton";
import AccountCheckMessage from "./styles/AccountCheckMessage";
const LoginCard = () => {

    const handleBlur = () => {
        console.log('blur');
    }
    const handleChange = (event: any) => {
        console.log(event.target.value);
    }
    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const [showPassword, setShowPassword] = useState(false)
    const [isDisabled, setDisabled] = useState(false)

    return (
        <Grid container spacing={5} >
            <Grid item xs={12} marginTop={2}>
                <Typography variant="h3" align="left" fontWeight={'bold'} color={"#333"}>Login</Typography>
            </Grid>
            <Grid item xs={12} >
                <AccountCheckMessage variant="body1" align="right" >Don't you have an account ?</AccountCheckMessage>
            </Grid>

            <Grid item xs={12}>
                <Input
                    type="email"
                    value=""
                    name="email"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    placeholder="Enter Your Email"
                    label="Email"
                    error=""
                />
            </Grid>

            <Grid item xs={12}>
                <Input
                    type={showPassword ? "text" : "password"}
                    value=""
                    name="password"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    placeholder="Enter Your Password"
                    label="Password"
                    error=""
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                size="medium"
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Grid>

            <Grid item xs={12}>
                <LoginOptions />
            </Grid>

            <Grid item xs={12}>
                <ActionButton content="Login" variant="contained" disabled={isDisabled} />
            </Grid>
        </Grid>

    )
}

export default LoginCard
