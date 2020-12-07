import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import useStylesSiteList from "../Styles/SiteListStyles";
import { DEFAULT_SUBTITLE } from "../Constants";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function ToolbarTertiary() {
    const classes = useStylesSiteList();
    return (
        <Toolbar className={classes.appBarTertiary}>
            <Typography variant={DEFAULT_SUBTITLE}>
                All Sites{" "}
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </Typography>

            <IconButton align="right">
                <SearchIcon />
            </IconButton>
        </Toolbar>
    );
}
export default ToolbarTertiary;
