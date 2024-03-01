import { Grid } from "@mui/material"
import { SideBarRowProps } from "./sidebarRow.interface"

const SidebarRow = ({ icon, content }: SideBarRowProps) => {
    return (
        <Grid container direction={'row'}>
            <Grid item xs={3}>{icon}</Grid>
            <Grid item xs={9} >{content}</Grid>
        </Grid>
    )
}

export default SidebarRow

