import AuthWrapper from '@/pages/Bookbody/authentication/AuthWrapper'
import LoginCard from '@/pages/Bookbody/authentication/LoginCard'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
    return (
        <AuthWrapper card={<LoginCard />} />
    )
}

export default page
