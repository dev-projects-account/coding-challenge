import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import useStylesSiteList from "../Styles/SiteListStyles";

function ToolbarTertiary() {
    const classes = useStylesSiteList();
    return (
        <Toolbar className={classes.appBarTertiary}>
            <Typography variant="subtitle1">All Sites</Typography>
            <IconButton align="right">
                <SearchIcon />
            </IconButton>
        </Toolbar>
    );
}
export default ToolbarTertiary;
