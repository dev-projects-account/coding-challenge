import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import useAppStyles from "../Styles/AppStyles";

function ToolbarPrimary() {
    const classes = useAppStyles();
    return (
        <AppBar className={classes.primaryAppBar} position="static">
            <Toolbar
                className={classes.toolbar}
                variant="dense"
                style={{ backgrounColor: "blue" }}
            >
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={classes.title}>
                    Scheduling
                </Typography>

                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <AppsIcon />
                    <Avatar className={classes.white}>D</Avatar>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default ToolbarPrimary;
