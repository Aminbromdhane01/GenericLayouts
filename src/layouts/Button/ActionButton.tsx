import { Button } from '@mui/material'
import React from 'react'

export interface ActionButtonProps {
    variant: "outlined" | "contained"
    disabled: boolean
    content: string
}

const ActionButton = ({ variant, disabled, content }: ActionButtonProps) => {
    return (
        <Button fullWidth variant={variant} disabled={disabled}>
            {content}
        </Button>
    )
}

export default ActionButton