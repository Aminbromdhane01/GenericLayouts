'use client'
import React, { useState } from 'react'
import SidebarContainer from './styles/sidebarContainer.styles'
import SidebarInner from './styles/sidebarInner.style'
import SidebarHeader from './styles/sidebarHeader.style'
import SidebarBurger from './styles/sidebarBurger.style'
import SidebarLogo from './styles/sidebarLogo'
import SidebarMenu from './styles/sidebarMenu.style'
import SidebarButton from './styles/siderbarButton'
import SidebarButtonSpan from './styles/sidebarButtonSpan.style'
import { Typography } from '@mui/material'

const navItems = ["home", "book"]

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <SidebarContainer className={`sidebar ${isOpen ? "open" : ""}`}>
            <SidebarInner>
                <SidebarHeader>
                    <SidebarBurger onClick={() => setIsOpen(!isOpen)}>
                        <span>{isOpen ? "close" : "menu"}</span>
                    </SidebarBurger>
                    <SidebarLogo src="" alt="" />
                </SidebarHeader>
                <SidebarMenu>
                    {navItems.map(navItem => (
                        <SidebarButton key={navItem}>
                            {isOpen && (
                                <>
                                    <SidebarButtonSpan>{navItem}</SidebarButtonSpan>
                                    <Typography>{navItem}</Typography>
                                </>
                            )}
                        </SidebarButton>
                    ))}
                </SidebarMenu>
            </SidebarInner>
        </SidebarContainer>
    )
}

export default SideBar
