import { FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material'
import React from 'react'
import { InputProps } from './input.interface'


const Input = ({ type, value, name, label, placeholder, handleBlur, handleChange, error, endAdornment }: InputProps) => {
    return (
        <Grid item xs={12}>
            <Stack spacing={1}>
                <InputLabel >{label}</InputLabel>
                <OutlinedInput

                    type={type}

                    name={name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={placeholder}
                    fullWidth
                    error={Boolean(error)}
                    endAdornment={endAdornment}
                />
                {error && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                        {error}
                    </FormHelperText>
                )}
            </Stack>
        </Grid>
    )
}

export default Input