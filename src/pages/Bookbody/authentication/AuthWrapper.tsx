'use client'
import { Box, Grid, Paper } from "@mui/material"
import React from "react"
import CardPaper from "./styles/CardPaper"
import Container from "./styles/Container"
import AuthElementsGrid from "./styles/AuthElementsGrid"
import LogoGrid from "./styles/LogoGrid"
import CardGrid from "./styles/CardGrid"

interface AuthWrapperChildren {
    background?: React.ReactNode
    logo?: React.ReactNode
    card: React.ReactNode
    footer?: React.ReactNode
}

const AuthWrapper = ({ background, logo, card, footer }: AuthWrapperChildren) => {
    return (
        <Container >
            {background}
            <AuthElementsGrid
                container
                direction="column"
                justifyContent="flex-end"
            >
                <LogoGrid item xs={12}>
                    {logo}
                </LogoGrid>
                <Grid item xs={12}>
                    <CardGrid
                        item
                        xs={12}
                        container
                        justifyContent="center"
                        alignItems="center"

                    >
                        <Grid item xs={10} sm={8} md={6} lg={4}>
                            <CardPaper elevation={2} >
                                {card}
                            </CardPaper>
                        </Grid>


                    </CardGrid>
                </Grid>
                <Grid item xs={12} p={3}>
                    {footer}
                </Grid>
            </AuthElementsGrid>
        </Container>
    )
}

export default AuthWrapper