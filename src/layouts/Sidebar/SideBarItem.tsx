import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
interface SideBarItemProps {
    content: string;
    icon: React.ReactNode
}
const SideBarItem = ({ content, icon }: SideBarItemProps) => {
    return (
        <ListItem disablePadding>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#ddd' } }}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={content} />
            </ListItemButton>
        </ListItem>
    )
}

export default SideBarItem